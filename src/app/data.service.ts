import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  sayHello() {
    console.log('Hello from MyService!');
  }
  getData(): Observable<any>{
    return this.http.get(`${this.apiUrl}/posts`);
  }
}