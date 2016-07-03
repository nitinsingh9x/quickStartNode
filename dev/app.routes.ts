import { provideRouter, RouterConfig }  from '@angular/router';
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: RouterConfig = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
