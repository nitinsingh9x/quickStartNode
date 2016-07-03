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
var DashboardComponent = (function () {
    function DashboardComponent(_router) {
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.logout = function () {
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['login']);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            templateUrl: '../dev/dashboard/dashboard.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXFCLGlCQUVyQixDQUFDLENBRnFDO0FBTXRDO0lBQ0ksNEJBQW9CLE9BQWM7UUFBZCxZQUFPLEdBQVAsT0FBTyxDQUFPO0lBRWpDLENBQUM7SUFDRixxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUNkLG1DQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQVpMO1FBQUMsZ0JBQVMsQ0FBQztZQUVQLFdBQVcsRUFBRSxpQ0FBaUM7U0FDakQsQ0FBQzs7MEJBQUE7SUFZRix5QkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksMEJBQWtCLHFCQVc5QixDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4uL2Rldi9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xyXG4gICAgICAgIFxyXG4gICAgIH1cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhfa2V5Jyk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
