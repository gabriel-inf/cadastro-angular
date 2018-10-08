import { Injectable } from '@angular/core';
import { Cursista } from './cursista';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  cursistas: any = [];

  constructor(private apiService: ApiService) {

  }


  loadCursistas(){
    this.apiService.getCursistas().subscribe(res => {
      this.cursistas = res;
      alert(JSON.stringify(res));
    });
  }


  

}
