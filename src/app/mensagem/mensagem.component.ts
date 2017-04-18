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

  //variável para controlar que item será removido
  private key: string; 

  /** mensagem para o template/bind */
  private mensagem : Mensagem = new Mensagem("","");

  /** lista de mensagens para o template/bind */
  private mensagens : FirebaseListObservable<any[]>;

  /** construtor com instância do serviço MensagemService */
  constructor(private mensagemService:MensagemService) {}

  /** adicionar mensagem */
  addMensagem(msg:Mensagem){
    // console.log('component-add: ' + msg.descricao);
    msg.descricoMinusculo = msg.descricao.toLowerCase();
    this.mensagemService.addMensagem(msg);
    //limpando campos da tela
    this.mensagem = new Mensagem("","");
  }

  /** seta o item a ser removido */
  setKey(key:string){
    this.key = key; 
  }

  /** excluir mensagem */
  delMensagem(){
    // console.log("component-del: "+ this.key);
    this.mensagemService.delMensagem(this.key);
  }

  /** carregar todas as mensagens ao iniciar */
  ngOnInit() {
    this.mensagens = this.mensagemService.getMensagens();
  }

}
