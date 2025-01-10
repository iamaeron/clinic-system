import { Hono } from 'hono'
import { cors } from 'hono/cors'
import authRoutes from './routes/auth.route'

const app = new Hono()

app.use('/api/*', cors());

app.route('/api', authRoutes)

export default app
