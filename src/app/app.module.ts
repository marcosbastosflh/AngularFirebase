import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppsettingsComponent } from './appsettings/appsettings.component';
import { MotoristaComponent } from './motorista/motorista.component';
import { MotoristaService } from './motorista/motorista.service';
import { MensagemComponent } from './mensagem/mensagem.component';
import { MensagemService } from './mensagem/mensagem.service';

// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyDKOlswDHl6fn4KeSPwyRMA5kWSNq42MeQ',
    authDomain: 'angularestudo-12c45.firebaseapp.com',
    databaseURL: 'https://angularestudo-12c45.firebaseio.com',
    storageBucket: 'angularestudo-12c45.appspot.com',
    messagingSenderId: '206178587178'
};

//Rotas
const appRoutes: Routes = [
  { path: 'mensagem', component: MensagemComponent },
  { path: 'motorista', component: MotoristaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    MensagemComponent,
    MotoristaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MensagemService,
    MotoristaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
