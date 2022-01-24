import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MainInboxComponent } from './main-inbox/main-inbox.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';
import { ProjectIssuesComponent } from './project-issues/project-issues.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    MainInboxComponent,
    UserRepositoriesComponent,
    ProjectIssuesComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    LoginRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
})
export class LoginModule {}
