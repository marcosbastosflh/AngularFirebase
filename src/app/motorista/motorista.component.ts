import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { MotoristaService } from './motorista.service';
import { Motorista } from './motorista.model';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.css']
})

export class MotoristaComponent implements OnInit {

  // variável para controlar que item será removido
  private key: string;

  // modo de edição
  public edicao = false;

  /** mensagem para o template/bind */
  public motorista: Motorista = new Motorista('', '');

  /** lista de mensagens para o template/bind */
  public itens: FirebaseListObservable<any[]>;

  /** construtor com instância do serviço MensagemService */
  constructor(private motoristaService: MotoristaService) {}

  /** adicionar mensagem */
  add(obj: Motorista) {
    // console.log('component-add: ' + obj.descricao);
    this.motoristaService.add(obj);
    // limpando campos da tela
    this.motorista = new Motorista('', '');

    this.edicao = false;
  }

  /** seta o item a ser removido */
  setKey(key: string) {
    this.key = key;
  }

  /** excluir mensagem */
  del() {
    // console.log("component-del: "+ this.key);
    this.motoristaService.del(this.key);
  }

  /** carega valores para edição */
  carregarValores(obj) {
    // copia o objeto
    this.motorista = Object.assign({}, obj);
    // coloca em modo de edição
    this.edicao = true;
  }

  limparCampos() {
    this.motorista = new Motorista('', '');
    this.edicao = false;
  }

  dirigir(obj) {
    this.motoristaService.dirigir(obj);
  }

  /** carregar todas as mensagens ao iniciar */
  ngOnInit() {
    this.itens = this.motoristaService.getAll();
    console.log( 'Lista: ' + this.itens.$ref );
  }
}
