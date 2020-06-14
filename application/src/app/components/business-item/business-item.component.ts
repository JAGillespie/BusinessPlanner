import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../services/businessService'
@Component({
  selector: 'app-business-item',
  templateUrl: './business-item.component.html',
  styleUrls: ['./business-item.component.css']
})
export class BusinessItemComponent implements OnInit {
businessItem:any[];

 

constructor(private _businessService: BusinessService) { } //nothing goes here but the DI 

public titleKey;
  

  ngOnInit() {
    const item = [];
    for(var i =0; i < localStorage.length; i++){
    const x = localStorage.getItem(localStorage.key(i));
      item.push(JSON.parse(x));
      this.businessItem = item;
    };
  }


 deleteBusiness(key){
 const titleKey = this._businessService.querySerializtion(key);
 localStorage.removeItem(titleKey);
 location.reload(); //reloads page
}

getKey(key){
 this._businessService.getTitleKey(key);
}
}
