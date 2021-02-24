const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors())

app.use(express.static('client'))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.all('*', (req, res) => {
  res.status(200).sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})