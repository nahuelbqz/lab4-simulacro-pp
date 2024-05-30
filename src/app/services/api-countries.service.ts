import { HttpClient,  } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCountriesService {

  // constructor(private http: HttpClient) {}

  // async getCountries() {
  //   try {
  //     const response: any = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
  //     const countries: any = await response.json();
  //     return countries;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags';

  http: HttpClient = inject(HttpClient);

  constructor() { }

  getCountries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
