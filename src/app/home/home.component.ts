import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  /*data for owl-carousel gallery*/
  public properties = [
    {name:"Kit Harington",
     characterName :"Jon snow",
     url:"https://images4.alphacoders.com/586/586332.jpg"  
  }, {name:"Sophie Turner",
  characterName :"Sansa stark",
  url:"https://wallpapersite.com/images/pages/pic_w/345.jpeg"  
}, {
   name:"Sean Bean",
   characterName :"Eddard stark",
    url:"https://images8.alphacoders.com/403/thumb-1920-403582.jpg"  
   }, 
    { 
      name:"Cersei Lannister",
    characterName :"Lena Headey",
     url:"https://images8.alphacoders.com/670/thumb-350-670057.jpg"  
   }, 
   {
     name:"Peter Dinklage",
   characterName :"Tyrion Lannister",
   url:"https://wallup.net/wp-content/uploads/2016/12/07/135400-Game_of_Thrones-Peter_Dinklage-Tyrion_Lannister-748x421.jpg"  
   },
    {
      name:"Maisie williams",
  characterName :"Arya stark",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFxt7AXRb7zqx9pNwROmhmQtbVQJo7wl0PwDxvnJpZTcwDGi-"  }
, {
      name:"Emilia clarke",
      characterName :"Daenerys Targaryen",
       url:"https://vignette.wikia.nocookie.net/94f06785-ae97-45cb-9bf7-dd896caf81ac/scale-to-width-down/800"  
      }, 

  ]
 

  constructor(public _router:RouterModule) { }

  ngOnInit() {
    
      $(document).ready(function(){
      
        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      })
    });
  }

}
