import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Actor } from '../../clases/actor';
import { NgFor } from '@angular/common';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-actor-listado',
  standalone: true,
  imports: [NgFor],
  templateUrl: './actor-listado.component.html',
  styleUrl: './actor-listado.component.css'
})
export class ActorListadoComponent {
  @Input() listadoRecibidoDeActores?: Actor[];
  @Output() PasamosUnActor: EventEmitter<Actor> = new EventEmitter<Actor>();


  listadoActores: Actor[] = [];
  firestoreServ = inject(FirestoreService)
  constructor() {}

  async ngOnInit() {
     this.listadoRecibidoDeActores = await this.firestoreServ.getActores();
  }

  pasarActor(actor: any) {
    this.PasamosUnActor.emit(actor);
  }
}
