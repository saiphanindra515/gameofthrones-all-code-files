import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-houseview',
  templateUrl: './houseview.component.html',
  styleUrls: ['./houseview.component.css']
})
export class HouseviewComponent implements OnInit {

  constructor(public _router:ActivatedRoute,public service : HttpserviceService,private toastr: ToastrService) { }
  public houseid;
  public houseinfo;
  public swor=[];
  public overlord;
  ngOnInit() {
  
   this.houseid = this._router.snapshot.paramMap.get('id');
   this.service.gethouse(this.houseid).subscribe(
     data => {
     this.houseinfo=data;
     console.log(this.houseinfo);
     }
   )
  }
  public getoverlord(c){
   this.service.getchar(c).subscribe(
     data =>{
       this.overlord = data;
       this.toastr.success('Data is fetching...', 'success!');
       console.log(this.overlord);
       
     },
     error=> {
       console.log('error ocured');
       this.toastr.error('Data unavailable', 'sorry!');
     }
   )
  }
  public getswa(s){
    if(s.length==0){
      this.toastr.error('swarnMembers is unavailable', 'sorry!');
    }
    else{
      this.toastr.success('Data is fetching...', 'success!');
    }
    for(let e of s){
      
      this.service.getchar(e).subscribe(
        data=>{
          this.swor.push(data);
          console.log(this.swor);
       },
       error=>{
         console.log('swar error occured');
       }
      )
    }

  }

}
