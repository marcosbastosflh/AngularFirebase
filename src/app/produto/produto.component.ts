import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './../shared/firebase.service';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  // variável para controlar que item será removido
  private key: string;

  // modo de edição
  public edicao = false;

  /** Produto para o template/bind */
  public item: Produto = new Produto('', '');

  /** lista de Produtos para o template/bind */
  public itens: FirebaseListObservable<any[]>;

  private user_email: String;

  /** construtor com instância do serviço ProdutoService */
  constructor(private produtoService: ProdutoService, public fireService: FirebaseService, private router: Router) {
    this.fireService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.router.navigate(['login']);
        } else {
          this.user_email = auth.google.email;
        }
      }
    );
  }

  /** adicionar Produto */
  addProduto(obj: Produto) {
    // console.log('component-add: ' + msg.descricao);
    obj.descricaoMinusculo = obj.descricao.toLowerCase();
    this.produtoService.addProduto(obj);
    // limpando campos da tela
    this.item = new Produto('', '');

    this.edicao = false;
  }

  /** seta o item a ser removido */
  setKey(key: string) {
    this.key = key;
  }

  /** excluir Produto */
  delProduto() {
    // console.log("component-del: "+ this.key);
    this.produtoService.delProduto(this.key);
  }

  /** carega valores para edição */
  carregarValores(obj) {
    // copia o objeto
    this.item = Object.assign({}, obj);
    // coloca em modo de edição
    this.edicao = true;
  }

  limparCampos() {
    this.item = new Produto('', '');

    this.edicao = false;
  }

  /** carregar todos Produtos ao iniciar */
  ngOnInit() {
    this.itens = this.produtoService.getProduto();
  }
}
