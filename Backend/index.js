const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000
//middleware otherwise the req from body won't be accesible to route
app.use(express.json());
//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.listen(port, () => {
  console.log(`inotebook backend listening on port ${port}`)
})