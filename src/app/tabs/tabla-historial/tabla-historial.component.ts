import { Component, Input, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-tabla-historial',
    templateUrl: './tabla-historial.component.html',
    styleUrls: ['./tabla-historial.component.scss'],
})
export class TablaHistorialComponent implements OnInit {
    public dataSource?: DataSource<any, any>;

    constructor() { }

    @Input() set data(data: any[]) {
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
