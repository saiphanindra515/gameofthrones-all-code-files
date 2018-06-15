import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { combineLatest } from 'rxjs';
import { combineAll } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {

  constructor(public _route:ActivatedRoute,public _router : Router,public httpservice:HttpserviceService,public toastr:ToastrService) { }
  public total=[];
  public bookid;
   public characterinfo=[];
   public bookinfo;
  ngOnInit() {
    this.bookid=this._route.snapshot.paramMap.get('id');
    console.log(this.bookid);
    this.bookinfo= this.httpservice.getbook(this.bookid).subscribe(
      data=>{
        this.bookinfo=data;
        
        console.log(this.total);
        console.log(this.bookinfo);
      }
    )
  }
  
  
  public getcharacter(c){
    if(c.length>0){
      this.toastr.success('data is fetching..','success');
    }
      for(let v of c) {
        
    
    this.httpservice.getchar(v).subscribe(
      data=>{
        this.characterinfo=data;
        
        this.total.push(this.characterinfo);
        
    
       
      },
      error =>{
        console.log("some error occured");
        this.toastr.error('no data available','error!');
      }
    
    )
  }
  }
 



 
}
