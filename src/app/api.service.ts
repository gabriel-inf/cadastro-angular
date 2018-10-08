import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cursista } from './cursista';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // url = "https://controle-curso.herokuapp.com"
  url = "https://controle-curso.herokuapp.com"

  constructor(private http: HttpClient) { }

  public getCursistas(): Observable<any>{
    let path = this.url+"/cursista"
    return this.http.get<Array<Cursista>>(path);
  }

  public postCursista(cursista: Cursista){
    let path = this.url+"/cursista"
    return this.http.post(path, cursista);
  }

  public updateConnection(){
    let path = this.url+"/connection"
    return this.http.get(path);
  }
  
}
