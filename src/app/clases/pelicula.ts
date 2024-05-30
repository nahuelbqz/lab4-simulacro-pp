export class Pelicula {
    id: number;
    nombre: string;
    tipo: string;
    fechaEstreno: string;
    cantidadPublico: number;
    fotoPelicula: string;
    // actor: any;
  
 
    constructor(id: number, nombre: string, tipo: string, fechaEstreno: string, cantidadPublico: number, fotoPelicula: string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;
        // this.actor = actor;
    }
}
