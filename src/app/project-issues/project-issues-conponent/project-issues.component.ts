import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-project-issues',
  templateUrl: './project-issues.component.html',
  styleUrls: ['./project-issues.component.css'],
})
export class ProjectIssuesComponent implements OnInit {
  issues!: any[];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getIssues().subscribe((issues) => {
      this.issues = issues;
    });
  }

}
