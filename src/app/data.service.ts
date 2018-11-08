import { Injectable } from '@angular/core';
import { Cursista } from './cursista';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  


  cursistas: any = [];
  selected_cursista: Cursista;

  constructor(private apiService: ApiService) {
    this.loadCursistas();
  }

  loadCursistasPerComunity(comunity_number: string): any {
    this.apiService.getCursistasPerComunity(comunity_number).subscribe(res => {
      this.cursistas = res;
    });
  }

  loadCursistas(){
    this.apiService.getCursistas().subscribe(res => {
      this.cursistas = res;
    });
  }

  selectCursista(c: Cursista){
    this.selected_cursista = c;
  }

  getCursistaById(id: number): Cursista{
    this.cursistas.forEach(cursistinha => {
      if (cursistinha.id === id){
        console.log(cursistinha.id)
        return cursistinha;
        
      }      
      
    });
    return null;
  }
  

}
