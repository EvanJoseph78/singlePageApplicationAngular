import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css'],
})
export class CompAtributosComponent {
  corFundo: string = 'red';
  estilo: string = 'enable';
  corDaFonte: string = 'cyan';
  item: string = '';
  lista: string[] = [];

  constructor() {}

  adicionarLista(){
    this.lista.push(this.item)
  }

  mudaCor() {
    if (this.estilo == 'enable') {
      this.estilo = 'disable';
    } else {
      this.estilo = 'enable';
    }
  }
}
