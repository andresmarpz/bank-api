import dotenv from "dotenv"
import { z } from "zod"

// load .env files
dotenv.config({ path: ".env.local" })

const schema = z.object({
  ENVIRONMENT: z.enum(["development", "production"]).default("development"),
  PORT: z
    .preprocess(
      (port) => parseInt(port as string, 10),
      z.number().positive().max(10000)
    )
    .default(4000),

  POSTGRES_HOST: z.string().default("postgres"),
  POSTGRES_PORT: z
    .preprocess(
      (port) => parseInt(port as string, 10),
      z.number().positive().max(10000)
    )
    .default(5432),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string(),
})

export const env = (() => schema.parse(process.env))()
