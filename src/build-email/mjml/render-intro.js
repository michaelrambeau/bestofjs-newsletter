const tinytime = require('tinytime')
const template = tinytime('{MMMM} {DD}, {YYYY}', { padDays: true })

function renderIntro() {
  return `
<mj-section>
  <mj-column>
    <mj-text font-size="20px">
      Trendiest projects this week (${template.render(new Date())})
    </mj-text>
    <mj-text>
      This is the weekly newsletter from <a href="https://bestofjs.org">Best of JavaScript</a>, thank you for having subscribed!
    </mj-text>
    <mj-text>
      Here are the 10 trendiest projects of the week, by number of stars added on GitHub.
    </mj-text>
  </mj-column>
</mj-section>
  `
}

module.exports = renderIntro
