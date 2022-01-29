import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectIssuesComponent } from './project-issues-conponent/project-issues.component';

const routes: Routes = [{ path: '', component: ProjectIssuesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectIssuesRoutingModule {}
