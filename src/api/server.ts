import { env } from "@/config/env"
import { logger } from "@/utils/logger"
import express from "express"
import type { Application } from "express"

export class Server {
  private app: Application = express()

  constructor() {
    this.setMiddleware()
    this.setRoutes()
  }

  private setMiddleware() {}
  private setRoutes() {
    this.app.get("/healthcheck", (_, res) => res.sendStatus(200))
  }

  public start() {
    logger.info("Starting server...")

    this.app.listen(env.PORT, () => {
      logger.info(`Server listening on port ${env.PORT}`)
    })
  }
}
