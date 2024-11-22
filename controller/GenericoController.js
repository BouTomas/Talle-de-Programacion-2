import Servicio from "../Servicio/Servicio.js";

class GenericoController {
  constructor() {
     this.servicio = new Servicio();
  }
  create = async (req, res) => {
    try {
      const{data}=req.body; //Desestructurar la data que llega por parametro
      const dataCreate = await this.servicio.create(data)
      //const dataCreate = await this.palabrasServicio.createWord({data}) Objeto
      //const palabra = await this.servicio.create()
      res.status(200).send({ message: palabra});
    } catch (error) {
      res.status(400).send({ message: error });
    }
  };

  get = async (req, res) => {
    try {
     const palabra = await this.servicio.get()
     res.status(200).send({ message: palabra});
    } catch (error) {
      res.status(400).send({ message: error });
    }
  };
}

export default GenericoController;