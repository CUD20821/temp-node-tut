const http = require ('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome to our HP')
  } else if(req.url === '/about') {
    res.end('Welcome to our journey')
  } else {
      res.statusCode = 404
      res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href = "/">Back</a>
      `)
      }
  })

server.listen(5000)