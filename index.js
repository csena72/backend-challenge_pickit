const app = require('./src/server');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./src/config');

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,    
    useUnifiedTopology: true,
  })
  .then(() => app.start().then())
  .catch(console.log);
