import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Cursista } from '../cursista';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-cursistas',
  templateUrl: './lista-cursistas.component.html',
  styleUrls: ['./lista-cursistas.component.css']
})
export class ListaCursistasComponent implements OnInit {

  comunidade: string;
  c: string;


  cursistas: any = []

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    apiService.getCursistas().subscribe(
      res => {
        this.cursistas = res
      });
  }

  ngOnInit() {
    this.comunidade = this.route.snapshot.paramMap.get('comunidade');
    alert(this.comunidade)
  }

}
