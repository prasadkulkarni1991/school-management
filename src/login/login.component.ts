import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component'
})
export class LoginComponent {
    constructor(
        private router: Router
    ){}

    login() {
       this.router.navigate['/.dashboard']
    }

}