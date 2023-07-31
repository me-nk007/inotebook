const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000


app.use(express.json())

// Available Routes

// app.get('/', (req, res) => {
//   res.send('Hello Nishant Kumar Karn')
// })

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`INotebook Backend listening on port ${port}`)
})
