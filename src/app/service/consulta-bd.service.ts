/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { ConsultaHistorial } from './HistorialRequest';

@Injectable({
    providedIn: 'root',
})
export class ConsultaBdService {
    constructor() { }

    async consultarHistorial(consultaHistorial: ConsultaHistorial) {
        const response = await fetch(
            'https://us-central1-entrada-personal.cloudfunctions.net/consultarHistorial',
            {
                method: 'POST',
                body: JSON.stringify({
                    fechadesde: consultaHistorial.fechadesde.toLocaleString('en-US', { timeZone: 'America/Mazatlan' }),
                    fechaasta: consultaHistorial.fechaasta.toLocaleString('en-US', { timeZone: 'America/Mazatlan' }),
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        );

        return response.json();
    }

    async consultarHistorialHoy() {
        return this.consultarHistorial({
            fechadesde: new Date(),
            fechaasta: new Date()
        });
    }
}