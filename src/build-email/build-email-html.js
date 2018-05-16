const mjml2html = require('mjml')
const debug = require('debug')('*')
const prettyBytes = require('pretty-bytes')

const renderNewsletter = require('./mjml/render-newsletter')

function buildNewsletter({ projects, date }) {
  const mjml = renderNewsletter({ projects, date })
  debug('Converting the mjml code', { size: prettyBytes(mjml.length) })
  const { html, errors } = mjml2html(mjml)
  return { html, mjml, errors }
}

module.exports = buildNewsletter
