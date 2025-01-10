import { Hono } from "hono";
import { authController } from "../controllers/auth.controller";

const app = new Hono()
  .post("/signin", authController)

export default app;