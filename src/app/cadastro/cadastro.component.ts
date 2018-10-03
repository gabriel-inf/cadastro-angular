import { Component, OnInit } from '@angular/core';
import { Cursista } from 'src/app/cursista';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  cursista: Cursista;


  constructor() { }

  ngOnInit() {
  }

  newCursista(nome){
    this.cursista.nome = nome;
  }

  teste(){
    alert(this.cursista.nome);
  }

}
