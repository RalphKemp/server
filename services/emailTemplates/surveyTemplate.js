module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I need your feedback</h3>
          <p>Please answer the following question</p>
          <p>${survey.body}</p>
        </div>
        <div>
          <a href="http://localhost:3000">Yes</a>
        </div>
        <div>
          <a href="http://localhost:3000">No</a>
        </div>
      </body>
    </html>
  `;
}

