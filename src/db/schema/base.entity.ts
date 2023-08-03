import { timestamp, uuid } from "drizzle-orm/pg-core"

export const baseEntity = {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("timestamp", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("timestamp", { mode: "date" }),
}
