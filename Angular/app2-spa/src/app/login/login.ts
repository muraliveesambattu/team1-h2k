import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Loginservice } from '../loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private loginService: Loginservice, private router: Router) {}
  username = '';
  password = '';
  errorMessage = '';
  onLogin(lofinForm: NgForm) {
    if (this.loginService.handleLogin(lofinForm.value)) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
