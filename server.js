const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

app.use(routes);
require('./passport')(app);

// use the routes we configured.
app.use(require('./routes'));



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fauna_db");

// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });


// MR some custom checks for errors for passport
app.use((error, req, res, next) => {
  console.error(error);
  res.json({
    error
  })
});
// configure mongoose
require('./middleware/mongoose')()
  .then(() => {
    // mongo is connected, so now we can start the express server.
    app.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));
  })
  .catch(err => {
    // an error occurred connecting to mongo!
    // log the error and exit
    console.error('Unable to connect to mongo.')
    console.error(err);
  });
