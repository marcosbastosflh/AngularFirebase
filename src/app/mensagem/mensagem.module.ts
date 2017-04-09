import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { MensagemComponent } from './mensagem.component';
import { MensagemService } from './mensagem.service';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDKOlswDHl6fn4KeSPwyRMA5kWSNq42MeQ",
    authDomain: "angularestudo-12c45.firebaseapp.com",
    databaseURL: "https://angularestudo-12c45.firebaseio.com",
    storageBucket: "angularestudo-12c45.appspot.com",
    messagingSenderId: "206178587178"
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    MensagemComponent
  ],
  exports: [
    MensagemComponent
  ],
  providers: [
    MensagemService
  ]
})
export class MensagemModule { }
