import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  @Input() nomeUsuario: string = "Anônimo";

  constructor() { }

  ngOnInit() {
  }

}
