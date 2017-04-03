import { Injectable } from '@angular/core';

@Injectable()
export class MensagemService {
  
  constructor() { }

  getAll(){
    return ['Mensagem 1', 'Mensagem 2', 'Mensagem 3']
  }

}
