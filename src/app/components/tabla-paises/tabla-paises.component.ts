import { Component, EventEmitter, Output } from '@angular/core';
import { ApiCountriesService } from '../../services/api-countries.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent {

  @Output() PasamosUnPais: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiCountries: ApiCountriesService) {}
  
  // listadoPaises: any;
  listadoPaises: any[] = [];

  ngOnInit(): void {
    this.apiCountries.getCountries().subscribe(
      (data) => {
        this.listadoPaises = data;
        
        this.traerPaises();
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );

    this.traerPaises();
  }

  traerPaises() {
    // this.listadoPaises = await this.apiCountries.getCountries();
    this.listadoPaises.sort((a: any, b: any) => {
      return a.name.common.localeCompare(b.name.common);
    });
  }

  pasarPais(pais: any) {
    this.PasamosUnPais.emit(pais);
  }
}
