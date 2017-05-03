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

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  /** construtor com instância do serviço MensagemService */
  constructor(private motoristaService: MotoristaService) {}

  /** adicionar mensagem */
  add(obj: Motorista) {
    // salvar
    this.motoristaService.add(obj);
    // limpando campos da tela
    this.motorista = new Motorista('', '');
    // retira do modo de edição
    this.edicao = false;
  }

  /** seta o item a ser removido */
  setKey(key: string) {
    // guarda chave do objeto que será manipulado
    this.key = key;
  }

  /** excluir mensagem */
  del() {
    // excluir
    this.motoristaService.del(this.key);
  }

  /** carega valores para edição */
  carregarValores(obj) {
    // copia o objeto
    this.motorista = Object.assign({}, obj);
    // coloca em modo de edição
    this.edicao = true;
  }

  /** limpa objeto e retira do modo de edição */
  limparCampos() {
    // cria um objeto limpo
    this.motorista = new Motorista('', '');
    // retira do modo de edição
    this.edicao = false;
  }

  /** atualiza a qtd e data de última ida do motorista */
  dirigir(obj) {
    // dirigir
    this.motoristaService.dirigir(obj);
  }

  /** verifica se o motorista ainda pode dirigir no dia atual */
  podeDirigir(date): boolean {
    const hoje = new Date().toLocaleDateString('pt-BR');
    // se a última vez for o dia atual
    if ( date === hoje ) {
      return false;
    }
    return true;
  }

  /** carregar todas as mensagens ao iniciar */
  ngOnInit() {
    this.itens = this.motoristaService.getAll();
  }
}
