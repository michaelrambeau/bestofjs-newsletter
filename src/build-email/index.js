const fs = require('fs-extra')
const path = require('path')
const debug = require('debug')('*')
const prettyBytes = require('pretty-bytes')

const { dateToString } = require('../utils/utils')
const data = require('../../reports/2018-05-12.json')
const buildNewsletter = require('./build-email-html')

async function main() {
  const { html, errors } = buildNewsletter(data)
  if (errors.length > 0) {
    console.error(errors)
  }
  const today = new Date()
  const todayAsString = dateToString(today)
  const filepath = path.join(process.cwd(), 'html', `${todayAsString}.html`)
  const filesize = prettyBytes(JSON.stringify(html).length)
  debug('Creating the HTML file', { filepath, filesize })
  await fs.outputFile(filepath, html)
  debug('HTML file created')
}

main()
