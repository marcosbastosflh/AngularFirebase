import { Component, OnInit } from '@angular/core';

import { MensagemService } from './mensagem.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  mensagens : FirebaseListObservable<any[]>;

  constructor(private mensagemService:MensagemService) {

    this.mensagens = this.mensagemService.getMensagens();

    // this.mensagens.forEach(element => {
    //   console.log(element);
    // });
  }

  ngOnInit() {
  }

}
