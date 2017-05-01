import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

import { Motorista } from './motorista.model';

@Injectable()
export class MotoristaService {
  /** lista de mensagem ordenada por descrição */
  private itens: FirebaseListObservable<any> = this.db.list('/motorista', {
      query: {
        orderByChild: 'qtd'
        // ,limitToFirst: 3
      }
    }
  );

  /** construtor com instância para firebase */
  constructor(private db: AngularFireDatabase) { }

  /** listar todas mensagens */
  getAll(): FirebaseListObservable<Motorista[]> {
    return this.itens;
  }

  /** adicionar mensagem */
  /** TODO: criar tabela de detalhes */
  add(obj: Motorista) {
    // console.log('service-add: ' + obj.descricao);
    // enviando a Mensagem para o firebase
    this.db.list('/motorista').$ref.ref.child(obj.codigo).set(obj);
  }

  /** excluir mensagem passando uma Mensagem*/
  del(key: string) {
    // console.log('service-del: ' + key);
    // removendo a Mensagem do firebase
    this.itens.remove(key);
  }

  dirigir(obj) {
    obj.qtd++;
    obj.data = new Date().getTime();
    this.db.list('/motorista').$ref.ref.child(obj.$key).set(obj);
  }
}

