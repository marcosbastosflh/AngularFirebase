import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { FirebaseService } from './../shared/firebase.service';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  @Input() nomeUsuario = '';
  @Input() emailUsuario = '';

  constructor(public authService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().then((data) => {
      this.router.navigate(['login']);
    });
  }
}
