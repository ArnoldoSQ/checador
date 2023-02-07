import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tabla-historial',
    templateUrl: './tabla-historial.component.html',
    styleUrls: ['./tabla-historial.component.scss'],
})
export class TablaHistorialComponent implements OnInit {
    public dataSource: any = [
        {
            matricula: 12345,
            nombre: 'El nombre',
            hora: 'la hora',
        }
    ];

    constructor() { }

    ngOnInit() { }

    matriculaDisplayValue(personal: any) {
        return personal?.matricula && `${String(personal.matricula).padStart(5, '0')}` || '';
    }
}
