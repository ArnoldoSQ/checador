import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonCardContent, LoadingController } from '@ionic/angular';
import * as QRCode from 'qrcode';
import { RespuestaChecador } from '../service/Model';
import { RegistroBdService } from '../service/registro-bd.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public codigo = '';
  public carga: HTMLIonLoadingElement;
  constructor(private registro: RegistroBdService, private alertController: AlertController, private loadingCtrl: LoadingController) { }

  async ngOnInit() {
    this.carga = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'circles',
    });




    const cliente = {
      nombre: 'http://localhost:4200/app',

    };
    QRCode.toString(JSON.stringify(cliente), (err, url) => {
      this.codigo = url;
      document.getElementById('contenedorImg').innerHTML = url;
    });
  }

  async checarllegada(matricula: any, password: any) {
    this.mostrarCarga();
    const respuesta = await this.registro.checarllegada({
      contraseña: password,
      matricula,
      localizacion: {
        latitud: 0,
        longitud: 0,
      },
    });
    this.cerrarcarga();

    this.mostrarMensajeChecador(respuesta);
  }

  async checarSalida(matricula: any, password: any) {
    this.mostrarCarga();
    const respuesta = await this.registro.checarSalida({
      contraseña: password,
      matricula,
      localizacion: {
        latitud: 0,
        longitud: 0,
      },
    });
    this.cerrarcarga();
    this.mostrarMensajeChecador(respuesta);
  }

  async mostrarMensajeChecador(respuesta: RespuestaChecador) {
    if (!respuesta || !respuesta.mensaje) {
      respuesta = new RespuestaChecador({
        estado: 'Error',
        mensaje: 'Ocurrió un error inesperado. Asegúrese que los datos sean correctos y vuelva a intentarlo más tarde.',
      });
    }

    const alert = await this.alertController.create({
      header: respuesta.estado,
      message: respuesta.mensaje,
      buttons: ['Ok'],
      backdropDismiss: true,

    });

    await alert.present();
    setTimeout(() => {
      if (alert?.dismiss) {
        alert?.dismiss();
      }
    }, 15000);
  }
  async mostrarCarga() {
    this.carga.present();
  }
  async cerrarcarga() {
    this.carga.dismiss();
  }
}
