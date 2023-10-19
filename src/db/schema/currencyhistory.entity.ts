import { InferModel, relations } from "drizzle-orm"
import { pgTable } from "drizzle-orm/pg-core"
import { baseEntity } from "@/db/schema/base.entity"
import { currencies } from "@/db/schema/currency.entity"

export const currencyHistories = pgTable("currencies_history", {
  ...baseEntity,
  currencyId: baseEntity.id,
  value: baseEntity.id,
})

export const currencyHistoriesRelations = relations(
  currencyHistories,
  ({ one }) => ({
    currency: one(currencies, {
      fields: [currencyHistories.currencyId],
      references: [currencies.id],
    }),
  })
)

export type CurrencyHistory = InferModel<typeof currencyHistories>
