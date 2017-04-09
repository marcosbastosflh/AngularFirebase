import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class MensagemService {
  
  constructor(private db:AngularFireDatabase) { }

  getMensagens():FirebaseListObservable<any[]>{
    return this.db.list('/mensagem');
  }

}
