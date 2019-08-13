import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { HostListener } from "@angular/core";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userScrolledBottom: boolean = true;
  toggleItems: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    window.onscroll = () =>  {
      if (window.pageYOffset > 0) {
        this.userScrolledBottom = false;
      } else {
        this.userScrolledBottom = true;
      }
    };
   

    
  }




}
