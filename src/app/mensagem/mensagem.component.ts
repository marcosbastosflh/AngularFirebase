import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { MensagemService } from './mensagem.service';
import { Mensagem } from './mensagem.model';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  /** mensagem para o template/bind */
  mensagem : Mensagem = new Mensagem("");

  /** lista de mensagens para o template/bind */
  mensagens : FirebaseListObservable<any[]>;

  /** construtor com instância do serviço MensagemService */
  constructor(private mensagemService:MensagemService) {}

  /** adicionar mensagem */
  addMensagem(msg:Mensagem){
    console.log('component-add: ' + msg.descricao);
    this.mensagemService.addMensagem(msg);
    //limpando campos da tela
    this.mensagem = new Mensagem("");
  }

  /** excluir mensagem */
  delMensagem(msg:Mensagem){
    console.log('component-del: ' + msg.descricao);
    if (confirm("Confirmar exclusão?")) {
      this.mensagemService.delMensagem(msg);
    }
  }

  /** carregar todas as mensagens ao iniciar */
  ngOnInit() {
    this.mensagens = this.mensagemService.getMensagens();
  }

}
