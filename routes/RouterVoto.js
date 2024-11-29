import { Router } from "express";
import VotoController from "../controller/VotoController.js";

class RouterVoto {
  constructor() {
    this.routerVoto = Router();
    this.VotoController = new VotoController();
    this.routes();
  }
// ACA IRIAN LOS METODOS DEL MIDELWARE
  // endpoints todas las rutas se manejan aca, el controlador se emcarga de hacerlo
  routes = () => {
    this.routerVoto.get("/", this.VotoController.get);
    this.routerVoto.post("/", this.VotoController.create);
    this.routerVoto.get("/obtenerVotosPorZona", this.VotoController.obtenerVotosPorZona);
    this.routerVoto.get("/obtenerVotosGenerales", this.VotoController.obtenerVotosGenerales);
    
  };

  start = () => {
    return this.routerVoto;
  };
}

export default RouterVoto;
// ------------------