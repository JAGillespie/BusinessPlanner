import { Component, OnInit, Input, Output, TemplateRef } from '@angular/core';
import { Business } from '../../interfaces/Business';
import { HttpClient } from '@angular/common/http';
import { BusinessService } from '../../services/businessService';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup } from '@angular/forms';


/**LOGIC FOR BUSINESS IDEA PAGE */

@Component({
  selector: 'app-business',
  templateUrl: 'business.component.html',
  styleUrls: ['business.component.css']
})

export class BusinessComponent implements OnInit {

  public titleKey;
  updatedBusinessForm: FormGroup;
  presetFormValues;
  businesssVenture: string[];
  modalRef: BsModalRef;
  config = {
    animated: true
  };

  businessUpdatedForm: Object;

  constructor(private _businessService: BusinessService, private modalService: BsModalService, private fb: FormBuilder) { }



  ngOnInit() {
    //this gets the searchable key from the URL, sets it to titleKey then searches the localstorage
    //called if titleKey is undefined because refreshing will lose the titleKey used to make get request
    if (this.titleKey === undefined) {
      let reloadToken = this._businessService.reloadQuery(window.location);
      this.titleKey = reloadToken;
      this.queryBusiness(this.titleKey);
    }

    //this get the local host searchable key from the form, then searchs localhost
    else if (this.titleKey != "") {
      this.titleKey = this._businessService.setKey();//the set key is created on the service and used to the val for titleKey at the top of this page
      let queryKey = this.titleKey;
      this.queryBusiness(queryKey);
    } else {
      return
    };

    //this gets the values from localstorage and sets them to presetFormValues
    this.presetFormValues = JSON.parse(localStorage.getItem(this.titleKey));


   // sets values properties left off orignal local storage data model
    this.updatedBusinessForm = this.fb.group({
      title: this.presetFormValues["title"],
      notes: this.presetFormValues["notes"],
      capital: this.presetFormValues["capital"],
      producersManf: this.presetFormValues["producersManf"],
      links: this.presetFormValues["links"],
      marketing: this.presetFormValues["marketing"],
      requirements: this.presetFormValues["requirements"],
      competition: this.presetFormValues["competition"],
    })
    //these create a let to hold preset values to be past form
  

  }

//queries local Storage and the set returned data to this.businessVenture
  queryBusiness(query) {
    let business: any = [];
    if (query) {
      query = this.titleKey;
      let querySearch = this._businessService.querySerializtion(query); //use meth on service to add underscore
      const data = JSON.parse(localStorage.getItem(querySearch));
      business.push(data);
      this.businesssVenture = business; //set the page global data businessVenture 
    }
    console.log(this.businesssVenture)
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  refresh(){
      location.reload();
  }

  updateBusiness(){
    console.log(this.updatedBusinessForm.value)
    this.titleKey = this.updatedBusinessForm.value.title;
    localStorage.setItem(this.titleKey,JSON.stringify(this.updatedBusinessForm.value));
   
  }

}

