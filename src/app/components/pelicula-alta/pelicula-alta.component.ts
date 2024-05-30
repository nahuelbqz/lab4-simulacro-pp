import { Component, NgModule } from '@angular/core';
import { Actor } from '../../clases/actor';
import { Pelicula } from '../../clases/pelicula';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActorListadoComponent } from '../actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from '../pelicula-listado/pelicula-listado.component';

@Component({
  selector: 'app-pelicula-alta',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor,ReactiveFormsModule,NgClass,ActorListadoComponent,PeliculaListadoComponent],
  templateUrl: './pelicula-alta.component.html',
  styleUrl: './pelicula-alta.component.css'
})
export class PeliculaAltaComponent {
  listadoImagenes: any = null;
  listadoActores: Actor[] = [];
  listadoPeliculas: Pelicula[] = [];
  peliculaNueva: Pelicula = new Pelicula(0, '', '', '', 0, ''); //, {} // para el actor
  formEnviado: boolean = false;
  imagenSeleccionada: boolean = false;
  vistaListado = false;
  textoVistaListado = 'Ver Listado de Peliculas';

  //@ts-ignore
  forma: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firestoreServ: FirestoreService
  ) {}

  async ngOnInit() {
    this.listadoImagenes = this.firestoreServ.traerImagenesPeliculas();
    this.forma = this.formBuilder.group({
      nombre: ['', Validators.required],
      espectadores: ['', Validators.required],
      tipo: ['', Validators.required],
      estreno: ['', Validators.required],
      portada: ['', Validators.required],
      //actor: ['', Validators.required],
    });

    // this.firestoreServ.traerActores().subscribe((actores) => {
    //   if (actores != null) {
    //     this.listadoActores = actores;
    //   }
    // });
    this.listadoActores = await this.firestoreServ.getActores();
    
    // this.firestoreServ.traerPeliculas().subscribe((peliculas) => {
    //   if (peliculas != null) {
    //     this.listadoPeliculas = peliculas;
    //   }
    // });
    this.listadoPeliculas = await this .firestoreServ.getPeliculas();
  }

  agregarPelicula(event: any) {
    this.forma.setValue({
      nombre: this.forma.getRawValue().nombre,
      espectadores: this.forma.getRawValue().espectadores,
      tipo: this.forma.getRawValue().tipo,
      estreno: this.forma.getRawValue().estreno,
      portada: this.peliculaNueva.fotoPelicula,
      // actor: this.peliculaNueva.actor,
    });

    if (!this.forma.invalid) {
      this.peliculaNueva.nombre = this.forma.getRawValue().nombre;
      this.peliculaNueva.cantidadPublico = this.forma.getRawValue().espectadores;
      this.peliculaNueva.tipo = this.forma.getRawValue().tipo;
      this.peliculaNueva.fechaEstreno = this.forma.getRawValue().estreno;

      this.firestoreServ.addPelicula(this.peliculaNueva);

      this.peliculaNueva = new Pelicula(0, '', '', '', 0, '');//, {}); //para el actor
      this.forma.reset();
      this.imagenSeleccionada = false;
    } else {
      this.formEnviado = true;
    }
  }

  seleccionarPortada(portada: string) {
    this.peliculaNueva.fotoPelicula = portada;
    this.imagenSeleccionada = true;
  }

  tomarActorSeleccionado($actor: any) {
    //this.peliculaNueva.actor = $actor;
    this.formEnviado = false;
  }

  verListado() {
    this.vistaListado = !this.vistaListado;
    if (!this.vistaListado) {
      this.textoVistaListado = 'Ver Listado de Actores';
    } else {
      this.textoVistaListado = 'Dejar de Ver Listado';
    }
  }
}
