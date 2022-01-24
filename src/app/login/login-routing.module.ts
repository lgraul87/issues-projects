import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login.component';
import { MainInboxComponent } from './main-inbox/main-inbox.component';
import { ProjectIssuesComponent } from './project-issues/project-issues.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'main-inbox', component: MainInboxComponent },
  { path: 'project-issues', component: ProjectIssuesComponent },
  { path: 'user-repositories', component: UserRepositoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
