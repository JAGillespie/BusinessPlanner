import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from './interfaces/Business';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
business: Business;
  
  constructor(private http: HttpClient) {
  }



}


