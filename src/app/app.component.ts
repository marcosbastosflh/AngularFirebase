import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './shared/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public user_displayName: String = '';
  private user_email: String;
  
  constructor(public fireService: FirebaseService, private router: Router) {
    this.fireService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );
  }
}
