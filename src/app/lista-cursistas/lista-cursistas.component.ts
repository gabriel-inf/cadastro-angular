import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
 

@Pipe({name: 'unidecode'})
export class UnidecodePipe implements PipeTransform {
  transform(value: string): string {
      return value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}

@Component({
  selector: 'app-lista-cursistas',
  templateUrl: './lista-cursistas.component.html',
  styleUrls: ['./lista-cursistas.component.css']
})
export class ListaCursistasComponent implements OnInit {

  comunidade: string;


  cursistas: any = []

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService
  ) {
    console.log(data.cursistas)
  }

  ngOnInit() {
    this.comunidade = this.route.snapshot.paramMap.get('comunidade');
  }

}
