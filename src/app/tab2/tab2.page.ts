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

  checarllegada() {
    this.registro.checarllegada({
      contraseña: '123456',
      matricula: '123456',
      localizacion: {
        latitud: 123456,
        longitud: 789456,
      },
    });
  }
}
