import { Injectable, inject } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { Firestore, addDoc, collection, getDocs } from '@angular/fire/firestore';
import { Actor } from '../clases/actor';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  firestore = inject(Firestore);

  //hacer el get de datos de la db para cada clase o las que necesite
  
  guardarFirestore(collectionName: string, guardar: any) {
    const db = this.firestore;
    
    const docRef = addDoc(collection(db, collectionName), guardar);
    
  }
  
  // ejemplos para traer y guardar en firestore 



  /////////  PELICULAS //////////////
  async getPeliculas(): Promise<Pelicula[]> {
    const peliculasCol = collection(this.firestore, 'peliculas');
    const peliculasSnapshot = await getDocs(peliculasCol);
    const peliculasList = peliculasSnapshot.docs.map(doc => {
      return doc.data() as Pelicula; //...doc.data() } as Pelicula;
    });

    return peliculasList;
  }

  async addPelicula(pelicula: Pelicula): Promise<void> {
    try {
      const peliculasCol = collection(this.firestore, 'peliculas');

        //pelicula debe ser un json con los datos
        console.log(JSON.stringify(pelicula))
        //paso el pelicula a objeto plano pq no me deja subirlo como objeto pelicula
        const peliculaObject = {
          id: pelicula.id,
          nombre: pelicula.nombre,
          tipo: pelicula.tipo,
          cantidadPublico: pelicula.cantidadPublico,
          fechaEstreno: pelicula.fechaEstreno,
          fotoPelicula: pelicula.fotoPelicula,
        };

      await addDoc(peliculasCol, peliculaObject);
      
    } catch (error) {
      console.error("Error al agregar la película: ", error);
    }
  }

  //para las img de las peliculas
  traerImagenesPeliculas() {
    const imagenes = [
      '../../assets/pelicula_1.jpg',
      '../../assets/pelicula_2.jpg',
      '../../assets/pelicula_3.jpg',
      '../../assets/pelicula_4.jpg',
      '../../assets/pelicula_5.jpg',
      '../../assets/pelicula_6.jpg',
      '../../assets/pelicula_7.jpg',
      '../../assets/pelicula_8.jpg',
      '../../assets/pelicula_9.jpg',
      '../../assets/pelicula_10.jpg',
    ];
    return imagenes;
  }

  ////////// ACTORES ////////////
  async getActores(): Promise<Actor[]> {
    const actoresCol = collection(this.firestore, 'actores');
    const actoresSnapshot = await getDocs(actoresCol);
    const actoresList = actoresSnapshot.docs.map(doc => {
      return doc.data() as Actor; 
    });

    return actoresList;
  }

  addActor(actor: Actor) {
    try {
      const actoresCol = collection(this.firestore, 'actores');

      //actor debe ser un json con los datos
      console.log(JSON.stringify(actor));

      //paso el actor a objeto plano pq no me deja subirlo como objeto actor
      const actorObject = {
        id: actor.id,
        nombre: actor.nombre,
        apellido: actor.apellido,
        edad: actor.edad,
        sexo: actor.sexo,
        //pais: actor.pais,
        nombrePais: actor.nombrePais,
        banderaPais: actor.banderaPais
      };
      
      const promise =  addDoc(actoresCol, actorObject);//actor

    } catch (error) {
      console.error("Error al agregar la película: ", error);
    }
  }

}
