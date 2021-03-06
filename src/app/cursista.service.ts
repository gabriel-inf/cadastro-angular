import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursistaService {

  nome: string; 
  paroquia: string;
  cpf: string;
  tamanhoCamisa: string;
  quarto: string;
  onibus: number;
  descricao: string;
  sexo: string; 
  ativa: boolean;
  foto: string;
  canhoto: boolean;

  constructor() { }
}
