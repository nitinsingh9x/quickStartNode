import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    
    templateUrl: '../dev/dashboard/dashboard.html'
})
export class DashboardComponent implements OnInit {
    constructor(private _router:Router) {
        
     }
    ngOnInit() { }
    logout(){
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['login']);    
    }
    

}