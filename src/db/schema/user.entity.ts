import { InferModel, relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { baseEntity } from "@/db/schema/base.entity"
import { accounts } from "@/db/schema/account.entity"
import { sessions } from "@/db/schema/session.entity"

export const users = pgTable("users", {
  ...baseEntity,
  email: text("email").notNull(),
  password: text("password").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
}))

export type User = InferModel<typeof users>
