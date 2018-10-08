import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Cursista } from '../cursista';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lista-cursistas',
  templateUrl: './lista-cursistas.component.html',
  styleUrls: ['./lista-cursistas.component.css']
})
export class ListaCursistasComponent implements OnInit {


  monstrar_comunidade="TODAS"
  
  cursistas: any = []

  constructor(apiService: ApiService) {
    apiService.getCursistas().subscribe(
      res => {
        this.cursistas = res
      });
  }

  ngOnInit() {
    console.log(this.cursistas)
  }

}
