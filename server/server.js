var express = require('express');
var app = express();

var fs = require('fs');

app.use(express.static('../client'))

var indexPage = fs.readFileSync('../client/index.html', 'utf8');

app.get('/', (req, res) => {
    res.send(indexPage);
})

var port = 8080;
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})