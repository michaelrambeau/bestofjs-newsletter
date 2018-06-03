const fs = require('fs-extra')
const path = require('path')
const debug = require('debug')('*')
const prettyBytes = require('pretty-bytes')

const { dateToString } = require('../utils/utils')
const data = require('../../reports/2018-06-03.json')
const buildNewsletter = require('./build-email-html')

function writeFile(extension, data) {
  const today = new Date()
  const todayAsString = dateToString(today)
  const filepath = path.join(
    process.cwd(),
    'emails',
    `${todayAsString}.${extension}`
  )
  const filesize = prettyBytes(JSON.stringify(data).length)
  debug('Creating the file', { filepath, filesize })
  return fs.outputFile(filepath, data)
}

async function main() {
  const { html, mjml, errors } = buildNewsletter({
    projects: data.projects,
    provider: 'elasticemail'
  })
  if (errors.length > 0) {
    console.error(errors)
  }
  await writeFile('html', html)
  await writeFile('mjml', mjml)
  debug('HTML and MJML files created')
}

main()
