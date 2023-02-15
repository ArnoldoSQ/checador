import { Component } from '@angular/core';
import * as esMessages from 'devextreme/localization/messages/es.json';
import { locale, loadMessages } from 'devextreme/localization';

if ((esMessages as any).default) {
  loadMessages((esMessages as any).default);
} else {
  loadMessages(esMessages);
}

locale('es');


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { }
}
