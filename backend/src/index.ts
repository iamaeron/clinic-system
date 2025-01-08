import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors());

app.get('/api/hello', (c) => {
  return c.text('Hello Hono!')
})

export default app
