import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from '../interfaces/issue';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private readonly url = 'https://api.github.com/repos/angular/angular/issues';

  constructor(private http: HttpClient) {}

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.url);
  }
}
