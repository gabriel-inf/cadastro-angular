import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Cursista } from '../cursista';

@Component({
  selector: 'app-lista-cursistas',
  templateUrl: './lista-cursistas.component.html',
  styleUrls: ['./lista-cursistas.component.css']
})
export class ListaCursistasComponent implements OnInit {



  cursistas: Array<Cursista> = [
    {
      nome: "Gabriel Stepien",
      descricao: "Eu não tinha estas mãos sem força, tão paradas e frias e mortas; eu não tinha este coração que nem se mostra. Eu não dei por esta mudança, tão simples, tão certa, tão fácil: – Em que espelho ficou perdida a minha face?",
      foto: "https://i.imgur.com/F9Ri634.jpg",
      paroquia: "NSF",
      cpf: "123546",
      tamanhoCamisa: "M",
      quarto: "3C1",
      onibus: 123,
      sexo: "Guri",
      ativa: true,
      canhoto: false
    },
    {
      nome: "Daniel Oliveira",
      descricao: "Geralmente quando falamos de uma pessoa, lembramos de seu modo de sorrir, de sua estatura, do formato do rosto, e assim por diante. Portanto, ao retratar alguém no papel você pode salientar algumas peculiaridades físicas, como: altura, cor da pele, cor dos olhos e cabelos, peso, modo de vestir, tom da voz, etc.. Também deverá apontar características psicológicas: caráter, temperamento, modo de se expressar, conduta, modo de agir, modo de falar, etc.",
      foto: "https://i.imgur.com/ISeWiji.jpg",
      paroquia: "NSG",
      cpf: "123546",
      tamanhoCamisa: "M",
      quarto: "3C1",
      onibus: 123,
      sexo: "Guri",
      ativa: true,
      canhoto: false
    },
    {
      nome: "Gabriel Stepien",
      descricao: "Eu não tinha estas mãos sem força, tão paradas e frias e mortas; eu não tinha este coração que nem se mostra. Eu não dei por esta mudança, tão simples, tão certa, tão fácil: – Em que espelho ficou perdida a minha face?",
      foto: "https://i.imgur.com/F9Ri634.jpg",
      paroquia: "NSF",
      cpf: "123546",
      tamanhoCamisa: "M",
      quarto: "3C1",
      onibus: 123,
      sexo: "Guri",
      ativa: true,
      canhoto: false
    },
    {
      nome: "Daniel Oliveira",
      descricao: "Geralmente quando falamos de uma pessoa, lembramos de seu modo de sorrir, de sua estatura, do formato do rosto, e assim por diante. Portanto, ao retratar alguém no papel você pode salientar algumas peculiaridades físicas, como: altura, cor da pele, cor dos olhos e cabelos, peso, modo de vestir, tom da voz, etc.. Também deverá apontar características psicológicas: caráter, temperamento, modo de se expressar, conduta, modo de agir, modo de falar, etc.",
      foto: "https://i.imgur.com/ISeWiji.jpg",
      paroquia: "NSG",
      cpf: "123546",
      tamanhoCamisa: "M",
      quarto: "3C1",
      onibus: 123,
      sexo: "Guri",
      ativa: true,
      canhoto: false
    }


  ]

  constructor(breakpointObserver: BreakpointObserver) {

  }

  ngOnInit() {

    console.log(this.cursistas)
  }

}
