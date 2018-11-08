import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {



  current_comunity = "";
  comunidades = [

    {id: 1, name: "Árvore"}, 
    {id: 2, name: "Chuva"}, 
    {id: 3, name: "Estrela"}, 
    {id: 4, name: "Fruto"}, 
    {id: 5, name: "Lua"}, 
    {id: 6, name: "Mar"}, 
    {id: 7, name: "Nuvem"}, 
    {id: 8, name: "Sol"}, 
    {id: 9, name: "Flor"}, 
    {id: 10, name: "Terra"}, 
    {id: 11, name: "Ar"}, 
    {id: 12, name: "Som"}

  ]




 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private data: DataService) {
  
  }

  updateComunity(comunity_number: string){
    this.data.loadCursistasPerComunity(comunity_number);
    this.current_comunity = comunity_number;

  }
  
    

  }