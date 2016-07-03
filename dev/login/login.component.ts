import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {AuthService} from '../services/authService';

@Component({
    selector:'login',
    templateUrl: '../dev/login/login.html',
    providers:[AuthService] 
})
export class LoginComponent implements OnInit {
    localUser = {
        username:'',
        password:''
    }
    constructor(private _service:AuthService,private _router:Router) { }

    ngOnInit() { }

    login(){
        this._service.loginfn(this.localUser).then((res) =>{
            console.log('response after succesfull login :'+ res);
            if(res)
            this._router.navigate(['/dashboard']);
            else
            console.log(res);
        })
        console.log('response after fail login');
    }

    clearvalues(){
        this.localUser.username = '';
        this.localUser.password = '';
    }


}