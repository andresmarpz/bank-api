import { bigint, pgTable, serial } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { baseEntity } from "@/db/schema/base.entity"
import { users } from "@/db/schema/user.entity"

export const accounts = pgTable("accounts", {
  ...baseEntity,
  number: serial("number").unique(),
  // as per https://orm.drizzle.team/docs/column-types/pg#bigint, mode: number
  // infers as a javascript number and supports between 2^31 and 2^53
  balance: bigint("balance", { mode: "number" }),
  ownerId: baseEntity.id,
})

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.ownerId],
    references: [users.id],
  }),
}))
