const build = require('./build-weekly-report')

async function main() {
  console.log('Build the weekly report...')
  const result = await build()
  console.log('THE END', result)
}

main()

module.exports = main
