import { Injectable } from '@angular/core';
import { CheckRequest } from './Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistroBdService {
  constructor(private http: HttpClient) {}

  checarllegada(checkRequest: CheckRequest) {
    return this.http
      .post(
        'https://us-central1-entrada-personal.cloudfunctions.net/checarLlegada',
        checkRequest
      )
      .toPromise();
  }

  checaSalida(checkRequest: CheckRequest) {
    return this.http
      .post(
        'https://us-central1-entrada-personal.cloudfunctions.net/checarSalida',
        checkRequest
      )
      .toPromise();
  }
}
