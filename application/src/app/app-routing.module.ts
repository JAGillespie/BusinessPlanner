import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/businesses/business.component';


const routes: Routes = [
   { path: '', component:HomeComponent},
   { path:'business/:businessName', component:BusinessComponent},
   { path:'business', component:BusinessComponent},
  //  { path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
