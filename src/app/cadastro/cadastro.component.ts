import { Component, OnInit } from '@angular/core';
import { Cursista } from 'src/app/cursista';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  cursista: Cursista;
  sexo: string;
  sexos = ["menino", "menina"]
  
  color = 'accent';
  button: boolean;

  comunidades = [

    "Árvore", "Chuva", "Estrela", "Fruto", "Lua", "Mar", "Nuvem", "Sol",
    "Flor", "Terra", "Ar"

  ]

  comunidade_refs = []
  

  constructor(private apiService: ApiService, private toastr: ToastrService) {
    this.cursista = new Cursista();

    let i = 0;
    this.comunidades.forEach(c => {
      this.comunidade_refs.push(this.comunidades[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())
      i = i + 1;
    });
    


  }

  ngOnInit() {
  }

  formNome(nome) {
    this.cursista.nome = nome;
    console.log(this.cursista.nome)
  }

  formParoquia(par) {
    this.cursista.paroquia = par;
    console.log(par)
  }

  formDescricao(desc) {
    this.cursista.descricao = desc;
    console.log(this.cursista.descricao);


  }

  create() { }


  onSubmit(form) {
    
    console.log(this.cursista.canhoto);
    
    this.apiService.postCursista(this.cursista).subscribe(
      res => {
        this.toastr.success(this.cursista.nome, 'Cursista cadastrado', {

          timeOut: 2000,
          positionClass: 'toast-top-center',
          progressAnimation: 'increasing',
          progressBar: true
    
    
        });
      },
      err => {
        console.log(err);
        this.toastr.error(err.message, 'Erro no cadastro!', {

          timeOut: 2000,
          positionClass: 'toast-top-center',
          progressAnimation: 'increasing',
          progressBar: true
    
    
        });
      });
  }


}
