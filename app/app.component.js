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
var login_component_1 = require('./login/login.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <nav>\n    <a [routerLink]=\"['/login']\" routerLinkActive=\"active\">Login</a>\n    \n  </nav>\n  <router-outlet></router-outlet> \n  ",
            directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVwRCxnQ0FBNkIseUJBQXlCLENBQUMsQ0FBQTtBQWF2RDtJQUFBO1FBQ0ksVUFBSyxHQUFHLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFiRjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsNklBTVg7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBQyxnQ0FBYyxDQUFDO1NBQy9DLENBQUM7O29CQUFBO0lBR0QsbUJBQUM7QUFBRCxDQUZELEFBRUUsSUFBQTtBQUZXLG9CQUFZLGVBRXZCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICA8bmF2PlxyXG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWycvbG9naW4nXVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5Mb2dpbjwvYT5cclxuICAgIFxyXG4gIDwvbmF2PlxyXG4gIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gXHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsTG9naW5Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgdGl0bGUgPSAnVG91ciBvZiBIZXJvZXMnO1xyXG4gfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
