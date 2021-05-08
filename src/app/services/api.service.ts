import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Country } from '../models/country.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getCities(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.api_url}/all?fields=name`)
      .pipe(
        map((data: any) =>
        data.map(
          (item: any) => item.name
        )
      ),
        catchError(this.handleError<Country[]>('getCities', []))
      );
  }

  getCity(country: string): Observable<any> {
    return this.http.get<Country>(`${environment.api_url +'/name/'+ country}?fields=name;capital;region`)
      .pipe(
        catchError(this.handleError<Country>('getCity'))
      );
  }

  private handleError<T>(_operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
