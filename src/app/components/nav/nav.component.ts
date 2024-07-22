import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinks } from 'src/app/models/navlinks.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navLinks = NavLinks;

  constructor(
    private router: Router
  ) {}

  isLinkActive(route: string): boolean {
    return this.router.url.includes(route);
  }

}
