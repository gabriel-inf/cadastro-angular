import { Component, OnInit, Input } from '@angular/core';
import { Cursista } from '../cursista';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  cursista: Cursista;

  masc = "masc";

  itens_descricao: Array<String> = []; 

  constructor() {
  }


  teste() {

  }
  ngOnInit() {
    if (this.cursista) {
      if (this.cursista.sexo.toLowerCase() == "f") {
        this.masc = "fem";
      }
    }

    this.itens_descricao = this.cursista.descricao.split(";");

  }
}