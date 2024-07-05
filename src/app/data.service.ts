import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  sayHello() {
    console.log('Hello from MyService!');
  }
}