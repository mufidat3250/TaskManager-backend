const express = require('express')
const cors = require('cors')
const tasks = require('./routes/tasks.js')
const app = express()
app.use(cors())
// app.use(express.static('./public/dist'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('testing')
})
app.use('/api/tasks', tasks)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

module.exports = app