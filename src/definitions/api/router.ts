import express from "express"
import { Controller as ControllerType } from "@/definitions/api/controller"

export abstract class Router<Controller extends ControllerType> {
  private router: express.Router
  private controller: Controller

  constructor(controller: Controller) {
    this.router = express.Router()
    this.controller = controller
    this.initializeRoutes()
  }

  public getRouter() {
    return this.router
  }

  public getController() {
    return this.controller
  }

  protected abstract initializeRoutes(): void
}
