import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {LoginComponent} from './login/login.component';

@Component({
    selector: 'my-app',
    template: `
  <nav>
    <a [routerLink]="['/login']" routerLinkActive="active">Login</a>
    
  </nav>
  <router-outlet></router-outlet> 
  `,
  directives: [ROUTER_DIRECTIVES,LoginComponent]
})
export class AppComponent {
    title = 'Tour of Heroes';
 }
