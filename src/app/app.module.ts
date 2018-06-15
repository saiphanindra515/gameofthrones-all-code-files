import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{RouterModule,Router} from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { AllitemsComponent } from './allitems/allitems.component';
import { ItemviewComponent } from './itemview/itemview.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { BookviewComponent } from './bookview/bookview.component';
import { HouseviewComponent } from './houseview/houseview.component';
import { CharacterviewComponent } from './characterview/characterview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllitemsComponent,
    ItemviewComponent,
    BookviewComponent,
    HouseviewComponent,
    CharacterviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'allitems',component:AllitemsComponent},
      {path:'house',component:HouseviewComponent},
      {path:'house/:id',component:HouseviewComponent},
      {path:'book/:id',component:BookviewComponent},
      {path:'character/:id',component:CharacterviewComponent}
    ]),
    HttpClientModule,
    OrderModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [RouterModule,OwlModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
