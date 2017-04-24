import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

import { Mensagem } from './mensagem.model';

@Injectable()
export class MensagemService {
  /** lista de mensagem ordenada por descrição */
  private itens: FirebaseListObservable<any> = this.db.list('/mensagem', {
      query: {
        orderByChild: 'descricaoMinusculo'
      }
    }
  );

  /** construtor com instância para firebase */
  constructor(private db: AngularFireDatabase) { }

  /** listar todas mensagens */
  getMensagens(): FirebaseListObservable<Mensagem[]> {
    return this.itens;
  }

  /** adicionar mensagem */
  addMensagem(msg: Mensagem) {
    // console.log('service-add: ' + msg.descricao);
    // enviando a Mensagem para o firebase
    // this.items.push(msg);
    this.db.list('/mensagem').$ref.ref.child(msg.codigo).set(msg);
    // this.items.push({ id: 9, descricao: 'teste 9', data: new Date().getTime() });
  }

  /** excluir mensagem passando uma Mensagem*/
  delMensagem(key: string) {
    // console.log('service-del: ' + key);
    // removendo a Mensagem do firebase
    this.itens.remove(key);
  }
}
