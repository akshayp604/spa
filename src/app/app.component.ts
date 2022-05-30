import { Component, Inject, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {DOCUMENT} from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa';
  path= '';
 
  constructor(private router : Router,private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2){
    // console.log(this.router.url)
  //  this.path = location.path();
   this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      const path = window.location.pathname.split('/').join(' ').trim();
      // document.body.className = (path) ? path : 'login';
      // console.log(path)
      // console.log(path)
      const currentPage = (path) ? path : '';
      const currentPageParts = currentPage.split(' ');
      console.log(currentPageParts)
      this.path = currentPageParts[currentPageParts.length - 1];
      let x  = currentPageParts.findIndex((y:any) => y == 'dashbord')
      if( x!= -1) {
        this.addClass()
      }else {
        this.removeClass()
      }
    }
  });
    
  }


  addClass () {
    this.renderer.addClass(this.document.body, 'is-dashboard-visible');
  }

  removeClass () {
    this.renderer.removeClass(this.document.body, 'is-dashboard-visible');
  }
}
