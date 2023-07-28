import { InferModel } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { baseEntity } from "@/db/schema/base.entity"

export const users = pgTable("users", {
  ...baseEntity,
  email: text("email"),
  password: text("password"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  // accounts relation oneToMany
  // sessions relation oneToMany
})

export type User = InferModel<typeof users>
