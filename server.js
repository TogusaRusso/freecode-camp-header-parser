// server.js
// where your node app starts

// init project
const express = require('express'),
      useragent = require('express-useragent')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", (req, res) => {
  const software = useragent.parse(req.headers['user-agent']).os
  const ip = req.headers['x-forwarded-for'].split(',')[0]
  const language = req.headers['accept-language'].split(',')[0]
  res.json({ip, language, software})
})

// listen for requests :)
var listener = app.listen(process.env.PORT, 
  () => console.log('Your app is listening on port ' + listener.address().port)
)
