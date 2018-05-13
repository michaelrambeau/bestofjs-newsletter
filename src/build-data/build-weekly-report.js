const fs = require('fs-extra')
const path = require('path')
const prettyBytes = require('pretty-bytes')
const debug = require('debug')('*')

const fetchTrendingProjects = require('./fetch-trending-projects')
const { dateToString } = require('../utils/utils')

async function buildWeeklyReport() {
  const today = new Date()
  const todayAsString = dateToString(today)
  debug('Fetching projects')
  const projects = await fetchTrendingProjects()
  const report = {
    date: today,
    projects
  }
  const filepath = path.join(process.cwd(), 'reports', `${todayAsString}.json`)
  const filesize = prettyBytes(JSON.stringify(report).length)
  debug('Creating the JSON file', { filepath, filesize })
  await fs.outputJSON(filepath, report)
  debug('Weekly report created!')
}

module.exports = buildWeeklyReport
