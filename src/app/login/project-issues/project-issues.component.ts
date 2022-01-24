import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-issues',
  templateUrl: './project-issues.component.html',
  styleUrls: ['./project-issues.component.css']
})
export class ProjectIssuesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // https://api.github.com/repos/angular/angular/issues
}
