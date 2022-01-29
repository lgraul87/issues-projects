import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/interfaces/issue';
import { IssuesService } from 'src/app/service/issue-service';


@Component({
  selector: 'app-project-issues',
  templateUrl: './project-issues.component.html',
  styleUrls: ['./project-issues.component.css'],
})
export class ProjectIssuesComponent implements OnInit {
  issues!: Issue[];

  constructor(private service: IssuesService) {}

  ngOnInit(): void {
    this.service.getIssues().subscribe((issues) => {
      this.issues = issues;
    });
  }

}
