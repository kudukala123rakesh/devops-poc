const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 CI/CD updated fast auto deploy Working Successfully!');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});

// test trigger
// fix ssh host
// fix ssh timeout
// test final CI/CD
// final SSH test
