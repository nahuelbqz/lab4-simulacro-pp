import { Component, Input, inject } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-pelicula-listado',
  standalone: true,
  imports: [TablaPeliculaComponent],
  templateUrl: './pelicula-listado.component.html',
  styleUrl: './pelicula-listado.component.css'
})
export class PeliculaListadoComponent {
  @Input() listadoRecibidoDePeliculas?: Pelicula[];

  firebaseServ = inject(FirestoreService);
  
  constructor() {}
  
  listaPeliculas : Pelicula[] = [];
  
  async ngOnInit() {
    this.listaPeliculas = await this.firebaseServ.getPeliculas();
  }
}
