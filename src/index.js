import express from 'express'
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello world madafakaaaa!')
})

app.listen(port, () => {
  console.log(`App test listening at http://localhost:${port}`)
})
