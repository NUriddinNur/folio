const express = require('express')
const path = require('path')
const os = require('os')
const app = express()

const network = os.networkInterfaces()
const host = network.wlp2s0[0].address

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'assets')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/messages', async (req, res) => {
    res.status(200)
    res.end()
})

app.get('*', (req, res) => {
    res.end()
})


app.listen(PORT, () => console.log(`server runnig http://${host}:${PORT}`))
