import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpserviceService } from '../httpservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-characterview',
  templateUrl: './characterview.component.html',
  styleUrls: ['./characterview.component.css']
})
export class CharacterviewComponent implements OnInit {

  constructor(public _router:ActivatedRoute,public httpserv:HttpserviceService,public toastr:ToastrService) { }
  public charid;
  
  public booksall=[];
  public singlecharacter=[];
  ngOnInit() {

    this.charid=this._router.snapshot.paramMap.get('id');
    console.log(this.charid);
     this.httpserv.getcharacter(this.charid).subscribe(
       data=>{
         this.singlecharacter=data;
         console.log(this.singlecharacter);
       }
     )
  }
  public getrelatedbooks(books){
    if(books.length>0){
      this.toastr.success('please wait!Data is fetching..','success!');
    }
    else {
      this.toastr.error('Data currently unavailable','sorry!');
    }
    for(let b of books) {
      console.log(b);
      this.httpserv.getchar(b).subscribe(
        data=>{
          
          this.booksall.push(data);
          console.log(this.booksall);
          
        }
      )
    }
  }
   
}
