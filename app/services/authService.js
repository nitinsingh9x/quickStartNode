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
var http_1 = require('@angular/http');
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    AuthService.prototype.loginfn = function (usercreds) {
        var _this = this;
        this.isLoggedin = false;
        var headers = new http_1.Headers();
        var creds = 'grant_type=password&username=' + usercreds.username + '&password=' + usercreds.password;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this._http.post('http://localhost:50917/Token', creds, { headers: headers }).subscribe(function (data) {
                if (data) {
                    window.localStorage.setItem('auth_key', 'Bearer ' + data.json().access_token);
                    _this.isLoggedin = true;
                }
            });
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRzVDO0lBR0kscUJBQW9CLEtBQVU7UUFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO0lBQUksQ0FBQztJQUVuQyw2QkFBTyxHQUFQLFVBQVEsU0FBYTtRQUFyQixpQkF3QkM7UUF2QkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLEtBQUssR0FBRywrQkFBK0IsR0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLFlBQVksR0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQy9GLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFFbkUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUV2QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBQyxLQUFLLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUVuRixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FDUixDQUFDO29CQUNHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMzRSxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFFM0IsQ0FBQztZQUVMLENBQUMsQ0FDSixDQUFBO1FBRUQsQ0FBQyxDQUFDLENBQUE7SUFHTixDQUFDO0lBOUJMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUErQmIsa0JBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBOUJZLG1CQUFXLGNBOEJ2QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2F1dGhTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBpc0xvZ2dlZGluOmJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApIHsgfVxyXG5cclxuICAgIGxvZ2luZm4odXNlcmNyZWRzOmFueSl7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZGluID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIHZhciBjcmVkcyA9ICdncmFudF90eXBlPXBhc3N3b3JkJnVzZXJuYW1lPScrdXNlcmNyZWRzLnVzZXJuYW1lKycmcGFzc3dvcmQ9Jyt1c2VyY3JlZHMucGFzc3dvcmQ7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwOTE3L1Rva2VuJyxjcmVkcyx7aGVhZGVyczpoZWFkZXJzfSkuc3Vic2NyaWJlKChkYXRhKT0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoX2tleScsJ0JlYXJlciAnK2RhdGEuanNvbigpLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZGluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
