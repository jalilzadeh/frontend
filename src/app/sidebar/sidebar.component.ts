import { Component, } from '@angular/core';
import { sideMenu } from '../sideMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  private sideMenu: Array<sideMenu>;

  constructor(private router: Router) {
    this.sideMenu = new Array<sideMenu>();
    this.sideMenu.push(new sideMenu('Home Page', '/home', true));
    this.sideMenu.push(new sideMenu('About me', '/about-me', true));
    this.sideMenu.push(new sideMenu('My biography', '/my-biography', true));
    this.sideMenu.push(new sideMenu('My Projects', '/my-projects', true));
    this.sideMenu.push(new sideMenu('Gallery', '/gallery', true));
    this.sideMenu.push(new sideMenu('News', '/news', true));
    this.sideMenu.push(new sideMenu('Contact me', '/contact-me', true));
  }

  onClick(i: number) {
    this.router.navigate([this.sideMenu[i].link]);
  }

}
