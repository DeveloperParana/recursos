import { IncomingMessage, ServerResponse, createServer } from 'http'

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.setHeader('Content-Type', 'text/html')
  res.writeHead(200)
  res.end(`<html><body><h1>This is HTML</h1></body></html>`)
}

const server = createServer(requestListener)

server.listen(8080, 'localhost', 1, () => {
  console.log('listen on 8080')
})
