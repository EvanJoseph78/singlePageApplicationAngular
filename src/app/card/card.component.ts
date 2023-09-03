import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  menuType: string = "superuser";
  remover(index: number) {
    this.produtos.splice(index, 1);
  }
  adicionar() {
    this.produtos.push('evandro');
  }
  produtos: string[] = [];

  constructor() {
    this.produtos = ['mouse', 'teclado', 'cabo', 'font', 'galaxy book 3-360'];
  }

  ngOnInit(): void {}
}
