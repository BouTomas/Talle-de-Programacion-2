import Factory from "../Model/DAO/Factory.js"
import { MODO_PERSISTENCIA } from "../config/config.js";
class ServicioVoto {
    constructor() {
      const zonas = ["zona1", "zona2", "zona3", "zona4"];
      const candidatos = ["candidatoA", "candidatoB", "candidatoC", "enblanco"];
      this.votos = [];
      this.dao=Factory.get(MODO_PERSISTENCIA)
    }
  
    /*create = async () => {
      try {
        const respuesta= await this.dao.create();
        return respuesta
      } catch (error) {
        throw error;
      }
    };*/

    create = async (zona,candidato) => {
      //const zonas = ["zona1", "zona2", "zona3", "zona4"];
      //const candidatos = ["candidatoA", "candidatoB", "candidatoC", "enblanco"];

      if (!zonasValidas.includes(zona)) {
        throw new Error("zona no correspondiente");
    }

    if (!candidatosValidos.includes(candidato)) {
      throw new Error("candidato no válido");
    }

    const voto = { zona, candidato };
    this.votos.push(voto);

    return `${zona} y ${candidato} agregados correctamente`;
    };
      // ------------------------
      //     const objetoPalabra = {
      //       id: (this.palabras[this.palabras.length - 1]?.id || 0) + 1,
      //       palabra,
      //       timestamp: new Date().getTime(),
      //     };
      //     this.palabras.push(objetoPalabra);
      // ------------------------
      // esto si viene como objeto
      //     palabra.id = (this.palabras[this.palabras.length - 1]?.id || 0) + 1;
      //     this.palabras.push(palabra)
      // ------------------------
      
  
    get = async () => {
      try {
        return " todo ok";
      } catch (error) {
        throw error;
      }
    };

    // Método para obtener los votos por zona
    obtenerVotosPorZona() {
      const votosPorZona = {};

      // Iteramos por las zonas y contamos los votos por candidato en cada zona
      this.zonas.forEach((zona) => {
          const votosZona = this.votos.filter((voto) => voto.zona === zona);
          const conteo = {
              candidatoA: 0,
              candidatoB: 0,
              candidatoC: 0,
              enblanco: 0,
          };

          votosZona.forEach((voto) => {
              conteo[voto.candidato]++;
          });

          votosPorZona[zona] = conteo;
      });

      return votosPorZona;
  }
////// VOTO POT ZONA PARAMETRO ZONA
  obtenerVotosPorZona(zona) {
    if (!this.zonasValidas.includes(zona)) {
        return { error: "zona no válida" }; // Validar si la zona es válida
    }

    const votosZona = this.votos.filter((voto) => voto.zona === zona);

    // Inicializamos el conteo para cada candidato
    const conteo = {
        candidatoA: 0,
        candidatoB: 0,
        candidatoC: 0,
        enblanco: 0,
    };

    // Contamos los votos por candidato
    votosZona.forEach((voto) => {
        conteo[voto.candidato]++;
    });

    return { [zona]: conteo }; // Retorna los votos contados para la zona
}

obtenerVotosGenerales = () => {
  const votosCandidatos = {
      candidatoA: 0,
      candidatoB: 0,
      candidatoC: 0,
      enblanco: 0,
  };

  // Contamos los votos generales de todos los votos
  this.votos.forEach((voto) => {
      votosCandidatos[voto.candidato]++;
  });

  return { generales: votosCandidatos };
};
  }
  
  export default Servicio;