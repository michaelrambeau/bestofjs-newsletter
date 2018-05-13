const tinytime = require('tinytime')
const template = tinytime('{MMMM} {DD}, {YYYY}', { padDays: true })

function renderIntro() {
  return `
<mj-section>
  <mj-column>
    <mj-text font-size="20px">
      Trendiest project this week (${template.render(new Date())})
    </mj-text>
    <mj-text>
      This is the weekly newsletter from <a href="https://bestof.js.org">Best of JavaScript</a>, thank you for having subscribed!
    </mj-text>
  </mj-column>
</mj-section>
  `
}

module.exports = renderIntro
