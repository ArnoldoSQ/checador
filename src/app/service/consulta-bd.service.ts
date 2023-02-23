/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { ConsultaHistorial } from './HistorialRequest';
import { Historial } from './Model';

@Injectable({
    providedIn: 'root',
})
export class ConsultaBdService {
    constructor() { }

    async consultarHistorial(consultaHistorial: ConsultaHistorial): Promise<Historial[]> {
        const response = await fetch(
            'https://us-central1-entrada-personal.cloudfunctions.net/consultarHistorial',
            {
                method: 'POST',
                body: JSON.stringify({
                    fechadesde: this.formatDate(consultaHistorial.fechadesde),
                    fechaasta: this.formatDate(consultaHistorial.fechaasta),
                }),
                headers: { 'Content-Type': 'application/json' },
            }
        );

        const historial: Historial[] = await response.json() || [];
        return historial.map((h: Historial) => ({ ...h, hora: h.hora - 3600000 }));
    }

    async consultarHistorialHoy() {
        return this.consultarHistorial({
            fechadesde: new Date(),
            fechaasta: new Date()
        });
    }

    formatDate(parameter: Date | string) {
        const date = new Date(parameter);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().padStart(2, '0');

        return Number(new Date(`${year}-${month}-${day}`));
    }
}
