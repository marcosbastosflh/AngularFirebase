import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MotoristaComponent } from './motorista/motorista.component';
import { MensagemComponent } from './mensagem/mensagem.component';

// Rotas
const appRoutes: Routes = [
  { path: 'mensagem', component: MensagemComponent },
  { path: 'motorista', component: MotoristaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
