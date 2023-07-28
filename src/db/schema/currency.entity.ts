import { numeric, pgEnum, pgTable } from "drizzle-orm/pg-core"
import { InferModel, relations } from "drizzle-orm"
import { baseEntity } from "@/db/schema/base.entity"
import { accounts } from "@/db/schema/account.entity"
import { currencyHistories } from "@/db/schema/currencyhistory.entity"

const currenciesEnum = pgEnum("currencies_name", ["USD", "EUR", "UYU", "CAD"])

export const currencies = pgTable("currencies", {
  ...baseEntity,
  name: currenciesEnum("name").unique(),
  value: numeric("value", { precision: 24, scale: 2 }).default("0"),
})

export const currenciesRelations = relations(currencies, ({ many }) => ({
  accounts: many(accounts),
  currencyHistories: many(currencyHistories),
}))

export type Currency = InferModel<typeof currencies>
