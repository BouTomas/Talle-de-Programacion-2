import ServicioVoto from "../Servicio/ServicioVoto.js";

class VotoController {
  constructor() {
     this.ServicioVoto = new ServicioVoto();
  }
  create = async (req, res) => {
    try {
      const{zona,candidato}=req.body; //Desestructurar la data que llega por parametro
      //aca iria metodo del midelware
      const dataCreate = await this.servicio.create(zona,candidato)
      res.status(200).send('Voto cargado');
    } catch (error) {
      res.status(400).send('Error al cargar voto');
    }
  };

  obtenerVotosPorZona = async (req, res) => {
    try {
      //const{zona}=req.body; //Desestructurar la data que llega por parametro
      //aca iria metodo del midelware
      const votosPorZona = await this.servicio.obtenerVotosPorZona();// Si va la zona por parametro es aca
        res.status(200).json(votosPorZona);
    } catch (error) {
      res.status(400).send('Error');
    }
  };

  obtenerVotosGenerales = async (req, res) => {
    try {
      //const{zona}=req.body; //Desestructurar la data que llega por parametro
      //aca iria metodo del midelware
      const VotosGenerales = await this.servicio.obtenerVotosGenerales();// Si va la zona por parametro es aca
        res.status(200).json(VotosGenerales);
    } catch (error) {
      res.status(400).send('Error');
    }
  };



  get = async (req, res) => {
    try {
     const dataGet = await this.servicio.get()
     res.status(200).send({ message: dataGet});
    } catch (error) {
      res.status(400).send({ message: error });
    }
  };
}

export default VotoController;