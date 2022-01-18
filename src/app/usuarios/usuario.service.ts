import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API: string='http://capi_examen_back_juan_salazar.test/users'; // api de php CRUD (API) express, go, etc.

  constructor(private clientHttp:HttpClient) { }

  ObtenerUsuarios(): Observable<Usuario[]>{
    return this.clientHttp.get<Usuario[]>(this.API)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
