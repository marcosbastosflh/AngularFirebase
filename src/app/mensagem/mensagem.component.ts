import { Component, OnInit } from '@angular/core';

import { MensagemService } from './mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  msg : string[];

  constructor(private mensagemService:MensagemService) {
    this.msg = this.mensagemService.getAll();
    //this.mensagemService.connect();
   }

  ngOnInit() {
  }

}
