import { Component, OnInit, ViewChild } from '@angular/core';
import { IonCardContent } from '@ionic/angular';
import * as QRCode from 'qrcode';
import { RegistroBdService } from '../service/registro-bd.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public codigo = '';
  constructor(private registro: RegistroBdService) {}

  async ngOnInit() {
    const cliente = {
      nombre: 'Luis Alejandro Guerrero Hernández',
      num: '20834',
      email: 'luis.guerrero@uas.edu.mx',
    };
    QRCode.toString(JSON.stringify(cliente), (err, url) => {
      this.codigo = url;
      document.getElementById('contenedorImg').innerHTML = url;
    });
  }

  async checarllegada(matricula: any, password: any) {
    console.log(matricula + ' - ' + password);
    const prueballegada = await this.registro.checarllegada({
      contraseña: password,
      matricula,
      localizacion: {
        latitud: 0,
        longitud: 0,
      },
    });
  }

  async checarSalida(matricula: any, password: any) {
    console.log(matricula + ' - ' + password);
    const pruebasalida = await this.registro.checarSalida({
      contraseña: password,
      matricula,
      localizacion: {
        latitud: 0,
        longitud: 0,
      },
    });
  }
}
