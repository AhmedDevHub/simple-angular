import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolling=false;
// to handel scroll
  ngOnInit(): void {
    window.addEventListener('scroll' ,()=>{
      if(window.scrollY > 30){
        this.isScrolling =true
      }else{
        this.isScrolling =false
      }
    })
}
}
