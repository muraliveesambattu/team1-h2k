import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  isLoggedIn = signal(false);

  handleLogin(value: any) {
    if(value.username != "" && value.password !== ""){
      this.isLoggedIn.set(true);
      return true;
    }
    return false;
  }

}
