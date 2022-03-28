const express = require('express')
const path = require('path')
const os = require('os')
const app = express()


const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'assets')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/messages', async (req, res) => {
    res.status(200)
    res.end('ok')
})

app.get('*', (req, res) => {
    res.end()
})


app.listen(PORT, () => console.log(PORT))
