import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './shared/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isLoggedIn: Boolean;
  public user_displayName: String = '';
  private user_email: String;
  
  constructor(public authService: FirebaseService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          console.log("Logged in");
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );
  }
}
