"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
        this.showMenu = true;
        this.isLoggedIn = true;
    }
    /*constructor(private _globalEventsManager: GlobalEventsManager, private _authService: AuthService, private _router: Router) {

        this._globalEventsManager.showMenu.subscribe((mode: boolean) => {
            this.showMenu = mode;
        });
    }*/
    MenuComponent.prototype.ngOnInit = function () {
        /*this._globalEventsManager.showMenu.emit(this.authService.isLoggedIn);*/
    };
    MenuComponent.prototype.logout = function () {
        /*this.globalEventsManager.showMenu.emit(false);
        this.authService.logout();
        this.router.navigate(['/login']);*/
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'main-menu',
        templateUrl: 'app/common/menu.component.html',
        styleUrls: ['app/common/menu.component.css']
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map