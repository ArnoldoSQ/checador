/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { CheckRequest } from './Model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistroBdService {
  constructor(private http: HttpClient) {}

  async checarllegada(checkRequest: CheckRequest) {
    const response = await fetch(
      'https://us-central1-entrada-personal.cloudfunctions.net/checarLlegada',
      {
        method: 'POST',
        body: JSON.stringify(checkRequest),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return response.text();
  }

  async checarSalida(checkRequest: CheckRequest) {
    const response = await fetch(
      'https://us-central1-entrada-personal.cloudfunctions.net/checarSalida',
      {
        method: 'POST',
        body: JSON.stringify(checkRequest),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return response.text();
  }
}
