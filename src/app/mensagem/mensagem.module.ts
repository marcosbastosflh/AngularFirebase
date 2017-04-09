import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensagemComponent } from './mensagem.component';
import { MensagemService } from './mensagem.service';

@NgModule({
  imports: [
    CommonModule
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
