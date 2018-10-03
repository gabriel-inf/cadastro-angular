import { Component, OnInit } from '@angular/core';
import { Cursista } from 'src/app/cursista';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  
  cursista: Cursista;


  constructor() { 
    this.cursista = new Cursista();
  }

  ngOnInit() {
  }

  formNome(nome){
    this.cursista.nome = nome;
    console.log( this.cursista.nome)
  }

  formParoquia(par){
    this.cursista.paroquia= par;
    console.log( par)
  }

  formDescricao(desc){
    this.cursista.descricao= desc;
    console.log(this.cursista.descricao)
  }

  create(){
    alert(this.cursista.nome);
    alert(this.cursista.paroquia);
  }

}
