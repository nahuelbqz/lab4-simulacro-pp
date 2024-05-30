import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { PeliculaListadoComponent } from '../pelicula-listado/pelicula-listado.component';
import { Pelicula } from '../../clases/pelicula';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [RouterLink, TablaPeliculaComponent, DetallePeliculaComponent, PeliculaListadoComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  
  // HARDCODE DE PELICULAS
  // listaPeliculas : Pelicula[] = [ new Pelicula(1,'Scarface','otros','1999',21000,''),
  // new Pelicula(2,'Spiderman','otros', '2007',33000,''),
  // new Pelicula(3,'Cupido','amor', '2003',4400,''),
  // new Pelicula(4,'Los simpsons','comedia', '2001',55000,''),
  // new Pelicula(5,'Viernes 13','terror', '2008',17000,'')];
  
  protected pelicula : Pelicula = new Pelicula(0,'','','',0,'');
  
  firebaseServ = inject(FirestoreService);
  
  constructor() {}
  
  listaPeliculas : Pelicula[] = [];
  
  async ngOnInit() {
    this.listaPeliculas = await this.firebaseServ.getPeliculas();
  }



  recibirItemDeHijo(peliculaRecibida : Pelicula){
    this.pelicula = peliculaRecibida;
  }


  
}
