import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppsettingsComponent } from './appsettings/appsettings.component';
import { MotoristaComponent } from './motorista/motorista.component';
import { MensagemComponent } from './mensagem/mensagem.component';
// Serviços
import { FirebaseService } from './shared/firebase.service';
import { MotoristaService } from './motorista/motorista.service';
import { MensagemService } from './mensagem/mensagem.service';
import { ApploginComponent } from './applogin/applogin.component';

// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyDKOlswDHl6fn4KeSPwyRMA5kWSNq42MeQ',
    authDomain: 'angularestudo-12c45.firebaseapp.com',
    databaseURL: 'https://angularestudo-12c45.firebaseio.com',
    storageBucket: 'angularestudo-12c45.appspot.com',
    messagingSenderId: '206178587178'
};

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    MensagemComponent,
    MotoristaComponent,
    ApploginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    MensagemService,
    MotoristaService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
