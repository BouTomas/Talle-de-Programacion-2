import Memoria from "./Memory.js";

class Factory{
    static get(tipo){
        switch (tipo) {
            case "memory":
                return new Memoria(); 
                
        
            default:
                return new Memoria(); 

               
        }
    }        
}

export default Factory