import { NextFunction, Request, Response } from "express"
import { z } from "zod"

export const BaseSchema = z.object({
  body: z.object({}).nonstrict().optional(),
  query: z.object({}).nonstrict().optional(),
  params: z.object({}).nonstrict().optional(),
  headers: z.object({}).nonstrict().optional(),
})

export type BaseSchema = z.infer<typeof BaseSchema>

export const withValidation =
  <T extends z.ZodType<BaseSchema>>(schema: T) =>
  (req: Request, _: Response, next: NextFunction) => {
    try {
      const result = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
      })
      // this is assigned because the schema could parse strings to numbers, for example
      // and we want to keep values and types in sync
      Object.assign(req, result)
      next()
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        // handle error
      }
    }
  }
