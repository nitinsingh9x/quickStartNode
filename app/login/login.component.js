"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var authService_1 = require('../services/authService');
var LoginComponent = (function () {
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.localUser = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._service.loginfn(this.localUser).then(function (res) {
            console.log('response after succesfull login :' + res);
            if (res)
                _this._router.navigate(['/dashboard']);
            else
                console.log(res);
        });
        console.log('response after fail login');
    };
    LoginComponent.prototype.clearvalues = function () {
        this.localUser.username = '';
        this.localUser.password = '';
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: '../dev/login/login.html',
            providers: [authService_1.AuthService]
        }), 
        __metadata('design:paramtypes', [authService_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUFxQixpQkFFckIsQ0FBQyxDQUZxQztBQUV0Qyw0QkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQU9wRDtJQUtJLHdCQUFvQixRQUFvQixFQUFTLE9BQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQU87UUFKL0QsY0FBUyxHQUFHO1lBQ1IsUUFBUSxFQUFDLEVBQUU7WUFDWCxRQUFRLEVBQUMsRUFBRTtTQUNkLENBQUE7SUFDa0UsQ0FBQztJQUVwRSxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDhCQUFLLEdBQUw7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUUsR0FBRyxDQUFDLENBQUM7WUFDdEQsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDO2dCQUNQLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUE1Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLE9BQU87WUFDaEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUMsQ0FBQyx5QkFBVyxDQUFDO1NBQzFCLENBQUM7O3NCQUFBO0lBMkJGLHFCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxzQkFBYyxpQkEwQjFCLENBQUEiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2xvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi4vZGV2L2xvZ2luL2xvZ2luLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOltBdXRoU2VydmljZV0gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBsb2NhbFVzZXIgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6JycsXHJcbiAgICAgICAgcGFzc3dvcmQ6JydcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6QXV0aFNlcnZpY2UscHJpdmF0ZSBfcm91dGVyOlJvdXRlcikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBsb2dpbigpe1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UubG9naW5mbih0aGlzLmxvY2FsVXNlcikudGhlbigocmVzKSA9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlIGFmdGVyIHN1Y2Nlc2Z1bGwgbG9naW4gOicrIHJlcyk7XHJcbiAgICAgICAgICAgIGlmKHJlcylcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlIGFmdGVyIGZhaWwgbG9naW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcnZhbHVlcygpe1xyXG4gICAgICAgIHRoaXMubG9jYWxVc2VyLnVzZXJuYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5sb2NhbFVzZXIucGFzc3dvcmQgPSAnJztcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
