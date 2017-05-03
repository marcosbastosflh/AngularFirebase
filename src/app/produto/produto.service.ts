import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

import { Produto } from './produto.model';

@Injectable()
export class ProdutoService {
  /** lista ordenada por descrição */
  private itens: FirebaseListObservable<any> = this.db.list('/produto', {
      query: {
        orderByChild: 'descricaoMinusculo'
      }
    }
  );

  /** construtor com instância para firebase */
  constructor(private db: AngularFireDatabase) { }

  /** listar todos produtos */
  getProduto(): FirebaseListObservable<Produto[]> {
    return this.itens;
  }

  /** adicionar produto */
  addProduto(obj: Produto) {
    // console.log('service-add: ' + msg.descricao);
    // enviando para o firebase
    // this.items.push(msg);
    this.db.list('/produto').$ref.ref.child(obj.codigo).set(obj);
    // this.items.push({ id: 9, descricao: 'teste 9', data: new Date().getTime() });
  }

  /** excluir passando um Produto*/
  delProduto(key: string) {
    // console.log('service-del: ' + key);
    // removendo do firebase
    this.itens.remove(key);
  }
}
