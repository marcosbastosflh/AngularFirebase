import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './mensagem.component';
import { MensagemService } from './mensagem.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
