import { Injectable } from '@angular/core';

@Injectable()
export class MensagemService {
  
  constructor() { }

  getAll(){
    return ['Mensagem 1', 'Mensagem 2', 'Mensagem 3'];
  }

  connect(){
    var ref = firebase.database().ref();
    ref.child("mensagem")
       .once("value")
       .then(function(snapshot) {
                  var test = snapshot.val(); 
                  console.log(test);
              });
  }

}
