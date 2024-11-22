import Factory from "../Model/DAO/Factory.js"
import { MODO_PERSISTENCIA } from "../config/config.js";
class Servicio {
    constructor() {
      this.dao=Factory.get(MODO_PERSISTENCIA)
    }
  
    create = async () => {
      try {
        const respuesta= await this.dao.create();
        return respuesta
      } catch (error) {
        throw error;
      }
    };
  
    get = async () => {
      try {
        return " todo ok";
      } catch (error) {
        throw error;
      }
    };
  }
  
  export default Servicio;