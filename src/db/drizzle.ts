import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import fs from "fs"
import { env } from "@/config/env"
import { logger } from "@/utils/logger"

const CONNECTION_STRING = `postgresql://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_DB}`

const migrationClient = postgres(CONNECTION_STRING, { max: 1 })

const queryClient = postgres(CONNECTION_STRING)
export const db = drizzle(queryClient)

export async function runMigrations() {
  logger.info("Running database migrations..")
  if (fs.existsSync("drizzle") && fs.readdirSync("drizzle").length > 0) {
    await migrate(drizzle(migrationClient), { migrationsFolder: "drizzle" })
  } else logger.warn("No migrations found.")
}
