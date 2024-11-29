import express from "express";
import RouterGenerico from "./routes/RouterGenerico.js";
import { MODO_PERSISTENCIA, SERVER_PORT } from "./config/config.js";

SERVER_PORT
class Server {
  constructor() {
    this.app = Express();
    this.port = SERVER_PORT || 8080;
    this.persistencia = MODO_PERSISTENCIA ;
    this.routerGenerico = new RouterGenerico();
    this.configureRoutes();
  }

  configureMidlewares=()=>{
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended:true}));
    
  };

  configureRoutes = () => {
    this.app.use("/api", this.routerGenerico.start());
  };

  start = async () => {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  };
}

export default Server;