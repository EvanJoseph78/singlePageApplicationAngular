import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css'],
})
export class CompAtributosComponent {
  mudaCor() {
    if (this.estilo == 'enable') {
      this.estilo = 'disable';
    } else {
      this.estilo = 'enable';
    }
  }
  estilo: string = 'enable';
}
