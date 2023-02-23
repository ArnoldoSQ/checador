import { Component, Input, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { Historial } from 'src/app/service/Model';

@Component({
    selector: 'app-tabla-historial',
    templateUrl: './tabla-historial.component.html',
    styleUrls: ['./tabla-historial.component.scss'],
})
export class TablaHistorialComponent implements OnInit {
    public dataSource?: DataSource<Historial, string>;

    constructor() { }

    @Input() set data(data: Historial[]) {
        this.dataSource = new DataSource({
            store: new ArrayStore({
                key: 'matricula',
                data: data || []
            })
        });
    }

    ngOnInit() { }

    matriculaDisplayValue(personal: any) {
        return personal?.matricula && `${String(personal.matricula).padStart(5, '0')}` || '';
    }
}
