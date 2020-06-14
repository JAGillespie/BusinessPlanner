import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //identifies this as a service
})

export class BannerMessageService {
    constructor(private httpClient: HttpClient){}
    getMessage(){
        return this.httpClient.get("https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
         {
            "headers": {
                "x-rapidapi-key": "a67645a9demsh994ded3e3edaf27p19e930jsnaebfd167cfbc"
            }})
    }
}