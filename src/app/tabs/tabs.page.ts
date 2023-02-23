import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ConsultaBdService } from '../service/consulta-bd.service';
import { ConsultaHistorial } from '../service/HistorialRequest';
import { Historial } from '../service/Model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  public carga = null;
  public historialDiario: Historial[] = [];
  public historialBusqueda: Historial[] = [];

  constructor(private consultaBd: ConsultaBdService, private loadingCtrl: LoadingController) { }

  async ngOnInit() {
    this.obtenerHistorialHoy();
    this.carga = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'circles',
    });
  }



  async filtrar(consulta: ConsultaHistorial) {
    this.mostrarCarga();
    this.historialBusqueda = await this.consultaBd.consultarHistorial(consulta);
    this.cerrarcarga();
  }

  async obtenerHistorialHoy() {
    this.historialDiario = await this.consultaBd.consultarHistorialHoy();
    setTimeout(this.obtenerHistorialHoy.bind(this), 240000);
  }

  async mostrarCarga() {
    this.carga.present();
  }
  async cerrarcarga() {
    this.carga.dismiss();
  }
}
