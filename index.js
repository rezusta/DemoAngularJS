const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})