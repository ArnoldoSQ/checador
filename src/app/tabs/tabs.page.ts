import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public registrosDia: any = [
    {
      matricula: 12345,
      nombre: 'El nombre',
      hora: 'la hora',
    }
  ];

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Inicio de sesión',
      buttons: ['Iniciar sesión'],
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

  matriculaDisplayValue(personal: any) {
    return personal?.matricula && `${String(personal.matricula).padStart(5, '0')}` || '';
  }

}
