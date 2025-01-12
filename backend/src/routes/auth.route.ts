import { Hono } from "hono";
import { authController } from "../controllers/auth.controller";

const app = new Hono()
  .post("/signin", authController)
  .get('/signin', c => c.json('s'))

export default app;