import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getIssues():Observable<any[]>{
    return this.http.get<any[]>('https://api.github.com/repos/angular/angular/issues');
  }
}
