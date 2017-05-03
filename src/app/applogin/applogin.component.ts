import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-applogin',
  templateUrl: './applogin.component.html',
  styleUrls: ['./applogin.component.css']
})
export class ApploginComponent implements OnInit {

  constructor(public authService: FirebaseService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }
}