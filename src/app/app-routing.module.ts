import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./project-issues/project-issues.module').then(
        (m) => m.ProjectIssuesModule
      ),
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then((m) => m.InfoModule),
  },
  {
    path: '**',
    redirectTo: '/info',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
