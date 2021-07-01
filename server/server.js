const fs = require('fs').promises
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000

app
  .use(cors())
  .use(bodyParser.json())

// app.get('/', (req, res) =>{ 
//       res.send('123')
// });

// app.listen(port)
// console.log(`http://localhost:${port}/`)

// fs.readFile('server/data/zh/headerlinks.json', function (err, data) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log(data.toString());
// });

fs.readdir(path.join(__dirname, 'data/zh')).then((files) => {
  console.log(files);
  console.log(__dirname);
})
console.log(__dirname);
