const app = require('./app.js');
const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});