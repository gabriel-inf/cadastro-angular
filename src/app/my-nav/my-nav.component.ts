import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {


  comunidades = [

    "Árvore", "Chuva", "Estrela", "Fruto", "Lua", "Mar", "Nuvem", "Sol",
    "Flor", "Terra", "Ar"

  ]


  comunidade_refs = []

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {

    let i = 0;
    this.comunidades.forEach(c => {
      this.comunidade_refs.push(this.comunidades[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())
      i = i + 1;
    });
    
  }
  
    

  }