import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MainInboxComponent } from './main-inbox/main-inbox.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';
import { ProjectIssuesComponent } from './project-issues/project-issues.component';

@NgModule({
  declarations: [LoginComponent, CreateAccountComponent, MainInboxComponent, UserRepositoriesComponent, ProjectIssuesComponent],
  imports: [
    CommonModule,
    LoginRoutingModule],
})
export class LoginModule {}
