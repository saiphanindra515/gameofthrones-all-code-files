import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { combineLatest } from 'rxjs';







@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.css'],
  

})
export class AllitemsComponent implements OnInit {

  constructor(public httpservice:HttpserviceService) { }
   public book:string="books";
   public char:string="characters";
   public hou:string="houses";
  public books;
   public characters;
   public houses:any[];
   public alporder;
  ngOnInit() {
    
     
    this.houses=this.httpservice.getInfo(this.hou);
    
    this.books=this.httpservice.getInfo(this.book);
    this.characters = this.httpservice.getInfo(this.char);

   this.alporder= combineLatest(this.books,this.houses,this.characters).subscribe(
      data=>{
        this.alporder=data;
        console.log(this.alporder);
      
      }
    )

  
  
  }
 
 
/*public compare(a, b) {
    // Use toUpperCase() to ignore character casing

    const genreA = a.name.toUpperCase();
    console.log(a.name);
    const genreB = b.name.toUpperCase();
  
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }
  */
  
  
    
  
 
}
