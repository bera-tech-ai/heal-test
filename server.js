const axios = require('axios')
const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<html><head><title>Heal Test</title></head><body><h1>Heal test OK — axios ' + (typeof axios.get === 'function' ? 'loaded' : 'missing') + '</h1></body></html>')
})
server.listen(Number(process.env.PORT) || 0, () => console.log('listening'))
