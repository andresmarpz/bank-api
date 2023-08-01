import { numeric, pgTable, text } from "drizzle-orm/pg-core"
import { InferModel, relations } from "drizzle-orm"
import { baseEntity } from "@/db/schema/base.entity"
import { accounts } from "@/db/schema/account.entity"

export const transactions = pgTable("transactions", {
  ...baseEntity,
  description: text("description"),
  amount: numeric("amount", { precision: 24, scale: 2 }),
  fee: numeric("fee", { precision: 24, scale: 2 }),
  fromAccountId: baseEntity.id,
  toAccountId: baseEntity.id,
})

export const transactionsRelations = relations(transactions, ({ one }) => ({
  fromAccount: one(accounts, {
    relationName: "fromAccount",
    fields: [transactions.fromAccountId],
    references: [accounts.id],
  }),
  toAccount: one(accounts, {
    relationName: "toAccount",
    fields: [transactions.toAccountId],
    references: [accounts.id],
  }),
}))

export type Transaction = InferModel<typeof transactions>
