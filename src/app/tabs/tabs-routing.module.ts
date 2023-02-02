import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: Tab2Page,
    children: [
      {
        path: '*',
        redirectTo: '/app'
      }
    ]
  },
  {
    path: 'admin',
    component: TabsPage,
    children: [
      {
        path: 'historial-diario',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'historial-completo',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/admin/historial-diario',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
