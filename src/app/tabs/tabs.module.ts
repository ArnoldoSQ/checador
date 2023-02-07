import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { DxDataGridModule, DxDateBoxModule } from 'devextreme-angular';
import { TablaHistorialComponent } from './tabla-historial/tabla-historial.component';
import { BusquedaHistorialComponent } from './busqueda-historial/busqueda-historial.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageRoutingModule,
    DxDataGridModule,
    DxDateBoxModule
  ],
  declarations: [TabsPage, TablaHistorialComponent, BusquedaHistorialComponent]
})
export class TabsPageModule {}
