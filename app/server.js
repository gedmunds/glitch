// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

var SendOut = function(unix, nat){
  this.unix = unix;
  this.natural = nat
}
var constant = "https://efficacious-bush.glitch.me/api/timestamp/"

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.get("/api/timestamp/:dateString", function (request, response){
  var query = request.params.dateString;
  var date = new Date(query);  
  if (date == "Invalid Date") {
    date = new Date(parseInt(query));
  }
  console.log(date)
  if (date == "Invalid Date") {
    var d = new SendOut(null, null);
  } else {
    var d = new SendOut(date.getTime(), date.toUTCString());
  }
  
  response.send(d);
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
