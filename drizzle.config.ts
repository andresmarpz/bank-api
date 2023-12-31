import { Config } from "drizzle-kit"
import dotenv from "dotenv"

dotenv.config({
  path: ".env.local",
})

export default {
  schema: "src/db/schema",
  out: "drizzle",
  driver: "pg",
  dbCredentials: {
    host: "127.0.0.1",
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB ?? "db",
  },
  strict: true,
} satisfies Config
