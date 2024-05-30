export class Actor {
    id: number;
    nombre: string;
    apellido: string;
    edad: string;
    sexo: string;
    //pais: string;
    nombrePais: string;
    banderaPais: string;

                                                                                    //pais: string,
    constructor(id: number, nombre: string, apellido: string, edad: string, sexo: string,  nombrePais: string, banderaPais: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        //this.pais = pais;
        this.nombrePais = nombrePais;
        this.banderaPais = banderaPais;
    }


}
