import { Component, OnInit } from '@angular/core';
import { Cursista } from 'src/app/cursista';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  selected_cursista_id: number;
  cursista: Cursista;
  sexo: string;
  sexos = ["menino", "menina"]

  color = 'accent';
  button: boolean;

  comunidades = []

  paroquias = [

    "NSFc",
    "SA",
    "IC",
    "SP",
    "NSCAR",
    "SMG",
    "NSAe",
    "PIO",
    "NSG",
    "SV",
    "ES",
    "NSC",
    "SSC",
    "SL",
    "NSAc",
    "SI",
    "SAMC",
    "ICM",
    "SCJ",
    "NSFs",
    "SR"


  ]

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService) {
    this.cursista = new Cursista();

    for (let index = 0; index < 12; index++) {
      this.comunidades.push(index + 1);
    }





  }

  ngOnInit() {

    this.selected_cursista_id =  parseInt(this.route.snapshot.paramMap.get('id').toString(), 10);
    this.cursista = this.data.getCursistaById(this.selected_cursista_id);

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
