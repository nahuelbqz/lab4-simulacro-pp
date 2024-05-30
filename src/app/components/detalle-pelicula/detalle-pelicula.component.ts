import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent {
  @Input() peliculaSeleccionada : any;//recibo informacion del item seleccionado

}
