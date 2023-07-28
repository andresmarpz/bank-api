import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { InferModel, relations } from "drizzle-orm"
import { baseEntity } from "@/db/schema/base.entity"
import { users } from "@/db/schema/user.entity"

export const sessions = pgTable("sessions", {
  ...baseEntity,
  userId: baseEntity.id,
  token: text("token"),
  expiresAt: timestamp("expires_at", { mode: "date" }),
  revoked: boolean("revoked"),
})

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}))

export type Session = InferModel<typeof sessions>
