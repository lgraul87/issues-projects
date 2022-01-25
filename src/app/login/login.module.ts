import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ProjectIssuesComponent } from './project-issues/project-issues.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../_material/material/material.module';

@NgModule({
  declarations: [LoginComponent, ProjectIssuesComponent],
  imports: [CommonModule, LoginRoutingModule, MaterialModule],
  exports: [MaterialModule],
  providers: [],
})
export class LoginModule {}
