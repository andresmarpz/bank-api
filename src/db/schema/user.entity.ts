import { InferModel, relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { baseEntity } from "@/db/schema/base.entity"
import { accounts } from "@/db/schema/account.entity"

export const users = pgTable("users", {
  ...baseEntity,
  email: text("email"),
  password: text("password"),
  firstName: text("first_name"),
  lastName: text("last_name"),
})

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}))

export type User = InferModel<typeof users>
