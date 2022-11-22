import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Inicio de secion',
      buttons: ['Iniciar Secion'],
      inputs: [
        {
          placeholder: 'Numero de empleado ',
        },
        {
          placeholder: 'Contraseña',attributes: {
            maxlength: 8,
          },
        }
      ],
    });

    await alert.present();
  }

}
