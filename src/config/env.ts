import dotenv from "dotenv"
import { z } from "zod"

// load .env files
dotenv.config()

const schema = z.object({
  PORT: z.number().default(4000),
  ENVIRONMENT: z.string().default("development"),
})

export const env = (() => schema.parse(process.env))()
