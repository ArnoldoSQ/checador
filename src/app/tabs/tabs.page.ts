import { Component, OnInit } from '@angular/core';
import { ConsultaBdService } from '../service/consulta-bd.service';
import { ConsultaHistorial } from '../service/HistorialRequest';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
    public historialDiario: any[] = [
        {
            matricula: 11223,
            nombre: 'Test 1',
            hora: '09:00 A.M',
            tocaLimpieza: true,
        },
        {
            matricula: 44556,
            nombre: 'Test 2',
            hora: '09:04 A.M',
            tocaLimpieza: false,
        }
    ];
    public historialBusqueda: any[] = [];

    constructor(private consultaBd: ConsultaBdService) { }

    ngOnInit(): void {
        // this.obtenerHistorialHoy();
    }

    async filtrar(consulta: ConsultaHistorial) {
        this.historialBusqueda = await this.consultaBd.consultarHistorial(consulta);
    }

    async obtenerHistorialHoy() {
        this.historialDiario = await this.consultaBd.consultarHistorialHoy();
        setTimeout(this.obtenerHistorialHoy.bind(this), 240000);
    }
}
