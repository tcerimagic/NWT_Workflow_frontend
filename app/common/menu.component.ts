import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

import { AuthService } from '../login/auth.service';
import { GlobalEventsManager } from './global-events-manager';

@Component({
    selector: 'main-menu',
    templateUrl: 'app/common/menu.component.html',
    styleUrls: ['app/common/menu.component.css']
})
export class MenuComponent implements OnInit {
    public showMenu: boolean = true;
    public isLoggedIn: boolean = true;

    /*constructor(private _globalEventsManager: GlobalEventsManager, private _authService: AuthService, private _router: Router) {

        this._globalEventsManager.showMenu.subscribe((mode: boolean) => {
            this.showMenu = mode;
        });
    }*/

    ngOnInit() {
        /*this._globalEventsManager.showMenu.emit(this.authService.isLoggedIn);*/
    }

    logout() {
        /*this.globalEventsManager.showMenu.emit(false);
        this.authService.logout();
        this.router.navigate(['/login']);*/
    }
}