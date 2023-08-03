import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"
import { users } from "@/db/schema/user.entity"

export const insertUserSchema = createInsertSchema(users)
export type InsertUserSchema = z.infer<typeof insertUserSchema>
