import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectIssuesComponent } from './project-issues-conponent/project-issues.component';
import { ProjectIssuesRoutingModule } from './project-issues-routing.module';
import { MaterialModule } from '../_material/material/material.module';

@NgModule({
  declarations: [ProjectIssuesComponent],
  imports: [CommonModule, ProjectIssuesRoutingModule, MaterialModule],
  exports: [],
  providers: [],
})
export class ProjectIssuesModule {}
