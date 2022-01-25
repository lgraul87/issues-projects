import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InfoComponent } from './info.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
    children: [
      {
        path: 'info',
        loadChildren: () =>
          import('../info/info.module').then((m) => m.InfoModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../login/login.module').then((m) => m.LoginModule),
      },
      { path: '**', redirectTo: '/info' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
