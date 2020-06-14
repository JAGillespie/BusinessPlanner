import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' //identifies this as a service
})
export class BusinessService {

public titleKey:string;


  constructor() { }
  //gets title of clicked from buiness-item
  getTitleKey(key:string) {
    this.titleKey = key;
    return
  }
 
  //sets the key on business page
  setKey(){
    let queryKey:string = this.titleKey;
    return queryKey; 
  }
  
  querySerializtion(searchKey:string ){
if(searchKey!= undefined){
  let searchableKey = searchKey.split(' ').join('_');
  return searchableKey;
}else{
  return
}
  }

//This get the param out of the url after / but is only called the single business page is reloaded
//this an algorihim to add underscore to the key
  reloadQuery(url:any){
    url = window.location.href;
    let locationReplace = url.replace(/%20/g ,"_");
    let loader = locationReplace.match(/\/([^\/]+)\/?$/)[1]
    return loader;
  }
}