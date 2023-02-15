/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { CheckRequest, RespuestaChecador } from './Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class RegistroBdService {
    constructor(private http: HttpClient) { }

    async checarllegada(checkRequest: CheckRequest): Promise<RespuestaChecador> {
        const response = await fetch(
            'https://us-central1-entrada-personal.cloudfunctions.net/checarLlegada',
            {
                method: 'POST',
                body: JSON.stringify(checkRequest),
                headers: { 'Content-Type': 'application/json' },
            }
        );

        return await response.json();
    }

    async checarSalida(checkRequest: CheckRequest): Promise<RespuestaChecador> {
        const response = await fetch(
            'https://us-central1-entrada-personal.cloudfunctions.net/checarSalida',
            {
                method: 'POST',
                body: JSON.stringify(checkRequest),
                headers: { 'Content-Type': 'application/json' },
            }
        );

        return await response.json();
    }
}
