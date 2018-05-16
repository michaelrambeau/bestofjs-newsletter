function renderFooter() {
  return ` 
<mj-section>
  <mj-column>
    <mj-text>
      Thank you for your attention, visit <a href="https://bestof.js.org">Best of JavaScript</a> 
      to check out the most popular open-source projects and the latest trends about the web platform and node.js.
    </mj-text>
    <mj-text>
      This e-mail has been sent to [[EMAIL_TO]], 
      <a href="[[UNSUB_LINK_EN]]">click here to unsubscribe</a>.
    </mj-text>
  </mj-column>
</mj-section>
  `
}

module.exports = renderFooter
