import { Component, OnInit } from '@angular/core';
import { Business } from '../../interfaces/Business';
import { HttpClient } from '@angular/common/http';
import { BusinessItemComponent } from '../business-item/business-item.component';
import { NgForm } from '@angular/forms';
import { BusinessService } from "../../services/businessService";
import { BannerMessageService } from "../../services/bannerMessage.service" 


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    business:Business;
    businesses: Business[]; //uses interface
    buzinezzes: any = [];
    author:any;
    text:any;

    constructor(private _businessService:BusinessService, 
        private _bannerMessageService: BannerMessageService){  }

    ngOnInit(){

    this._bannerMessageService.getMessage().subscribe((res)=>{
        this.author = res['author'];
        this.text = res['text'];

     })
}

saveBusiness(businessForm:NgForm):void{
   
    const title = businessForm.value.title; //form title data before unscores added to
    const titleKey =  this._businessService.querySerializtion(title); //applies underscores

    localStorage.setItem(titleKey,JSON.stringify(businessForm.value)); //query made
    console.log(businessForm.value)
    location.reload();

    }
}



