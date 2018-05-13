const renderHeader = require('./render-header')
const renderIntro = require('./render-intro')
const renderProject = require('./render-project')
const renderFooter = require('./render-footer')

function renderNewsletter({ projects, date }) {
  const spacer = (space = 20) => `<mj-spacer height="${space}px" />`
  return `
    <mjml>
      <mj-head>
        <mj-style inline="inline">
          a { color: #e65100; text-decoration: none }
        </mj-style>
      </mj-head>    
      <mj-body background-color="#ececec">
        ${renderHeader()}
        ${renderIntro()}
        ${projects.map(renderProject).join(spacer())}
        ${renderFooter()}
      </mj-body>
    </mjml>
`
}
module.exports = renderNewsletter
