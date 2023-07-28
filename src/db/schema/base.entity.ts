import { serial, timestamp } from "drizzle-orm/pg-core"

export const baseEntity = {
  id: serial("id").primaryKey(),
  createdAt: timestamp("timestamp", { mode: "date" }),
  updatedAt: timestamp("timestamp", { mode: "date" }),
}
