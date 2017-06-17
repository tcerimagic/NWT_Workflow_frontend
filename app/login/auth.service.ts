import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    public isLoggedIn: boolean = false;

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }
}
