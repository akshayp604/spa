import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa';
  path= '';
  constructor(private router : Router,private route: ActivatedRoute){
    // console.log(this.router.url)
  //  this.path = location.path();
   this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      const path = window.location.pathname.split('/').join(' ').trim();
      // document.body.className = (path) ? path : 'login';
      // console.log(path)
      const currentPage = (path) ? path : '';
      const currentPageParts = currentPage.split(' ');
      this.path = currentPageParts[currentPageParts.length - 1];
    }
  });
    
  }
}
