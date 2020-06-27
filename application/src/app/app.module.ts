import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //used to provide form features
import { HttpClientModule } from '@angular/common/http' //Module used to make HTTP availible
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/businesses/business.component';
import { BusinessItemComponent } from './components/business-item/business-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { BusinessService } from './services/businessService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'




import { reducer } from './reducers/tutorial.reducers'
import { BannerMessageService } from './services/BannerMessage.service';
// import { TodoListComponent } from './todo-list/todo-list.component';



//NgModule is the decorator used to declare a module
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessComponent,
    BusinessItemComponent,
    TodoListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule, ModalModule.forRoot(),
    DragDropModule,
    MatCardModule,
    MatInputModule
 
  ],
  providers: [BusinessService, BannerMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
