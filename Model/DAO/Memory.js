class Memory {
    constructor() {
      this.palabras = [];
    }
    //la logica se aplica en el Servicio, aca solo agrega al array
    //   { id: 1, palabra: "Hola", timestamp: 1624450180112 }
    create = async (palabra) => {
      //     esto es una palabra suelta 
      const objetoPalabra = {};
      objetoPalabra.id = (this.palabras[this.palabras.length - 1]?.id || 0) + 1;
      objetoPalabra.palabra = palabra;
      objetoPalabra.timestamp = new Date().getTime();
      this.palabras.push(objetoPalabra);
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
      return  `${palabra} agregada/o`
    };
  
  get=async()=>{
       return this.palabras
  }
  
  }
  
  export default Memory;