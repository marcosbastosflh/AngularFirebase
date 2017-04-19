import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { MensagemModule } from './mensagem/mensagem.module';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppsettingsComponent } from './appsettings/appsettings.component';

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
    AppsettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MensagemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
