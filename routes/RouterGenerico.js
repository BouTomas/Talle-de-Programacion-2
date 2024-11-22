import { Router } from "express";
import GenericoController from "../controller/GenericoController.js";

class RouterGenerico {
  constructor() {
    this.routerGenerico = Router();
    this.genericoController = new GenericoController();
    this.routes();
  }

  // endpoints todas las rutas se manejan aca, el controlador se emcarga de hacerlo
  routes = () => {
    this.routerGenerico.get("/", this.genericoController.get);
    this.routerGenerico.post("/", this.genericoController.create);
  };

  start = () => {
    return this.routerGenerico;
  };
}

export default RouterGenerico;
// ------------------