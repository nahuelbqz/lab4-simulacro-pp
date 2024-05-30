import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export class TablaPeliculaComponent {
  // Input -> El hijo recibe información
  // Output -> El hijo envía información
  
  @Input() listaPeliculasInput : Pelicula[] = [] //recibo informacion desde peliculaListado y busqueda
  
  // HARDCODE DE PELICULAS
  // listaPeliculasTabla : Pelicula[] = [ new Pelicula(1,'Scarface','otros','1999',21000,''),
  // new Pelicula(2,'Spiderman','otros', '2007',33000,''),
  // new Pelicula(3,'Cupido','amor', '2003',4400,''),
  // new Pelicula(4,'Los simpsons','comedia', '2001',55000,''),
  // new Pelicula(5,'Viernes 13','terror', '2008',17000,'')];

  //OUTPUT para el btn detalle de BUSQUEDA
  @Output() onEnviarItemHaciaPadre = new EventEmitter<Pelicula>();//mando el item seleccionado hacia el padre
  enviarItemHaciaPadre(pelicula : Pelicula){
    this.onEnviarItemHaciaPadre.emit(pelicula)
    console.info(pelicula)
  }  


}
