import { Component, OnInit, Input } from '@angular/core';
import { Cursista } from '../cursista';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) {
  }


  teste() {

  }
  ngOnInit() {
    if (this.cursista) {
      if (this.cursista.sexo.toLowerCase() == "f") {
        this.masc = "fem";
      }
    }
    this.itens_descricao = this.cursista.descricao.split("#");
  }

  edit(c: Cursista){
    this.data.selectCursista(c);
    this.router.navigate([`../../cadastro/${c.id}`], { relativeTo: this.route });
  }


}