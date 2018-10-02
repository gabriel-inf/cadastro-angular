import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-lista-cursistas',
  templateUrl: './lista-cursistas.component.html',
  styleUrls: ['./lista-cursistas.component.css']
})
export class ListaCursistasComponent implements OnInit {



  cursistas = [
    {
      nome: "Gabriel Stepien",
      descricao: "Eu não tinha estas mãos sem força, tão paradas e frias e mortas; eu não tinha este coração que nem se mostra. Eu não dei por esta mudança, tão simples, tão certa, tão fácil: – Em que espelho ficou perdida a minha face?",
      foto: "https://lh3.googleusercontent.com/p39vYGhCoPS3yGQ21Ij74bXl68RmemOx5TLObyI7hCuSJ422KDl0GTI2qAad2i7GtVRnWUqQUQITGTXJqckZBZb_laBtkn3jJ8_Cs1ba3siIV0K6Fd_-tpVrsYj7gUz26Jd3k-58DHSmPQR8PguhoBpv7xaPYx3M0svQlq7cZICa0mj2k-bTG0wiHA2aSU6VJtoH3FPQjFJ2D287q9pwlEV89kUJW00Acrq9bwZUioGJqINh0YCG2MIVLt0qnh64or_ayeTIDkNLCcD6Eu_3eYtQcG6tHmTRZGU4j27-qKiOlc2I2RDHhiFkgl9MGPpqctEqxAazc9fcz4C7wnkIBp4_OCWK0a57nZCukAgaHB8WLakmd4Ca4c3IweKL39c4utP6A_LNmHrE1CcSN_lTrdpMYbRmhyBPq1oTrsclxY2FgMfHxxOZ2Oskb9YsUC0kqgfRKLCoyScW_rT4wYgLYXgYj4ISZE24qlYq3Fr8a5NnjXIqDXHkLx4MG8l014OC8i6E5LBJKUhCvVWUnJf8nklVBvrGgVnWbWHyYxELZw7_d1CLNu4JgK7i3rFtf4lX7i2EXz4wNgCgl6j3z9KJwF5hAcx_bgn7shXuBU0MTowu8BLbU4KhTOBpZZsqSS6i=s719-no",
      paroquia: "NSF",
    },
    {
      nome: "Daniel Oliveira",
      descricao: "Geralmente quando falamos de uma pessoa, lembramos de seu modo de sorrir, de sua estatura, do formato do rosto, e assim por diante. Portanto, ao retratar alguém no papel você pode salientar algumas peculiaridades físicas, como: altura, cor da pele, cor dos olhos e cabelos, peso, modo de vestir, tom da voz, etc.. Também deverá apontar características psicológicas: caráter, temperamento, modo de se expressar, conduta, modo de agir, modo de falar, etc.",
      foto: "https://lh3.googleusercontent.com/oznYxhCm1u-0GHOXwozW0M2RNUZ56nvtuneLswn0lkfSTwsKOyuomzvJpvUdxAqFQeqmsYwnuBLtOb80LPWof-oqLs1TMbKJbr56nuh2nZeQH12UrabHrYLYZ04vocDNaILe0IQLpsqqzHbFPHLz5ItljBFmZ-P4N01YI6g-KVqCzXAXvFIYEOwNtJPJb3SGUtYt4HbSzRL28cSXIS9h_0rO8TUn77blwHJYmnIaY1E53XKzAmC0C1l3dXDqejIK9EzmnZk6E8C7Z9WLE4OKHupeWPAc0cRa-UbVtLq5hyWglSwNyQ15HuH0kuUCpTczzUuCMKJXaj0LikunkwDW2-8Nwk9dscF7TvFYWF3d8YkCE6nU1Yu2FoTWcFsap9DxxwyIOln0sX0Xs6oDPuLUOrW9eGU5n1tctP_RGladkMC3cy5IpXyFZFjvHOq4Aiw4bkJrxc_lNfwRIKJYF8zQR03REwcXaSTe4LZz2jMosqwxNkuDZa4B2G78NMEkNIDU5o4-u97NX0oC_1gfYMTW2IMbYM2agtoCl_Pox6UpQAgvXXRo5TtJqS8FMLjG4dDmWo0Isc4CwnYxALmXDzjLKBTC1dOAdI6kkj_xIxytrHMZfRzdmlJ1Ga1Oq5_TU0VJ=s969-no",
      paroquia: "NSG"
    },
    {
      nome: "Gabriel Stepien",
      descricao: "Eu não tinha estas mãos sem força, tão paradas e frias e mortas; eu não tinha este coração que nem se mostra. Eu não dei por esta mudança, tão simples, tão certa, tão fácil: – Em que espelho ficou perdida a minha face?",
      foto: "https://lh3.googleusercontent.com/p39vYGhCoPS3yGQ21Ij74bXl68RmemOx5TLObyI7hCuSJ422KDl0GTI2qAad2i7GtVRnWUqQUQITGTXJqckZBZb_laBtkn3jJ8_Cs1ba3siIV0K6Fd_-tpVrsYj7gUz26Jd3k-58DHSmPQR8PguhoBpv7xaPYx3M0svQlq7cZICa0mj2k-bTG0wiHA2aSU6VJtoH3FPQjFJ2D287q9pwlEV89kUJW00Acrq9bwZUioGJqINh0YCG2MIVLt0qnh64or_ayeTIDkNLCcD6Eu_3eYtQcG6tHmTRZGU4j27-qKiOlc2I2RDHhiFkgl9MGPpqctEqxAazc9fcz4C7wnkIBp4_OCWK0a57nZCukAgaHB8WLakmd4Ca4c3IweKL39c4utP6A_LNmHrE1CcSN_lTrdpMYbRmhyBPq1oTrsclxY2FgMfHxxOZ2Oskb9YsUC0kqgfRKLCoyScW_rT4wYgLYXgYj4ISZE24qlYq3Fr8a5NnjXIqDXHkLx4MG8l014OC8i6E5LBJKUhCvVWUnJf8nklVBvrGgVnWbWHyYxELZw7_d1CLNu4JgK7i3rFtf4lX7i2EXz4wNgCgl6j3z9KJwF5hAcx_bgn7shXuBU0MTowu8BLbU4KhTOBpZZsqSS6i=s719-no",
      paroquia: "NSF",
    },
    {
      nome: "Daniel Oliveira",
      descricao: "Geralmente quando falamos de uma pessoa, lembramos de seu modo de sorrir, de sua estatura, do formato do rosto, e assim por diante. Portanto, ao retratar alguém no papel você pode salientar algumas peculiaridades físicas, como: altura, cor da pele, cor dos olhos e cabelos, peso, modo de vestir, tom da voz, etc.. Também deverá apontar características psicológicas: caráter, temperamento, modo de se expressar, conduta, modo de agir, modo de falar, etc.",
      foto: "https://lh3.googleusercontent.com/oznYxhCm1u-0GHOXwozW0M2RNUZ56nvtuneLswn0lkfSTwsKOyuomzvJpvUdxAqFQeqmsYwnuBLtOb80LPWof-oqLs1TMbKJbr56nuh2nZeQH12UrabHrYLYZ04vocDNaILe0IQLpsqqzHbFPHLz5ItljBFmZ-P4N01YI6g-KVqCzXAXvFIYEOwNtJPJb3SGUtYt4HbSzRL28cSXIS9h_0rO8TUn77blwHJYmnIaY1E53XKzAmC0C1l3dXDqejIK9EzmnZk6E8C7Z9WLE4OKHupeWPAc0cRa-UbVtLq5hyWglSwNyQ15HuH0kuUCpTczzUuCMKJXaj0LikunkwDW2-8Nwk9dscF7TvFYWF3d8YkCE6nU1Yu2FoTWcFsap9DxxwyIOln0sX0Xs6oDPuLUOrW9eGU5n1tctP_RGladkMC3cy5IpXyFZFjvHOq4Aiw4bkJrxc_lNfwRIKJYF8zQR03REwcXaSTe4LZz2jMosqwxNkuDZa4B2G78NMEkNIDU5o4-u97NX0oC_1gfYMTW2IMbYM2agtoCl_Pox6UpQAgvXXRo5TtJqS8FMLjG4dDmWo0Isc4CwnYxALmXDzjLKBTC1dOAdI6kkj_xIxytrHMZfRzdmlJ1Ga1Oq5_TU0VJ=s969-no",
      paroquia: "NSG"
    },
    {
      nome: "Gabriel Stepien",
      descricao: "Eu não tinha estas mãos sem força, tão paradas e frias e mortas; eu não tinha este coração que nem se mostra. Eu não dei por esta mudança, tão simples, tão certa, tão fácil: – Em que espelho ficou perdida a minha face?",
      foto: "https://lh3.googleusercontent.com/p39vYGhCoPS3yGQ21Ij74bXl68RmemOx5TLObyI7hCuSJ422KDl0GTI2qAad2i7GtVRnWUqQUQITGTXJqckZBZb_laBtkn3jJ8_Cs1ba3siIV0K6Fd_-tpVrsYj7gUz26Jd3k-58DHSmPQR8PguhoBpv7xaPYx3M0svQlq7cZICa0mj2k-bTG0wiHA2aSU6VJtoH3FPQjFJ2D287q9pwlEV89kUJW00Acrq9bwZUioGJqINh0YCG2MIVLt0qnh64or_ayeTIDkNLCcD6Eu_3eYtQcG6tHmTRZGU4j27-qKiOlc2I2RDHhiFkgl9MGPpqctEqxAazc9fcz4C7wnkIBp4_OCWK0a57nZCukAgaHB8WLakmd4Ca4c3IweKL39c4utP6A_LNmHrE1CcSN_lTrdpMYbRmhyBPq1oTrsclxY2FgMfHxxOZ2Oskb9YsUC0kqgfRKLCoyScW_rT4wYgLYXgYj4ISZE24qlYq3Fr8a5NnjXIqDXHkLx4MG8l014OC8i6E5LBJKUhCvVWUnJf8nklVBvrGgVnWbWHyYxELZw7_d1CLNu4JgK7i3rFtf4lX7i2EXz4wNgCgl6j3z9KJwF5hAcx_bgn7shXuBU0MTowu8BLbU4KhTOBpZZsqSS6i=s719-no",
      paroquia: "NSF",
    },
    {
      nome: "Daniel Oliveira",
      descricao: "Geralmente quando falamos de uma pessoa, lembramos de seu modo de sorrir, de sua estatura, do formato do rosto, e assim por diante. Portanto, ao retratar alguém no papel você pode salientar algumas peculiaridades físicas, como: altura, cor da pele, cor dos olhos e cabelos, peso, modo de vestir, tom da voz, etc.. Também deverá apontar características psicológicas: caráter, temperamento, modo de se expressar, conduta, modo de agir, modo de falar, etc.",
      foto: "https://lh3.googleusercontent.com/oznYxhCm1u-0GHOXwozW0M2RNUZ56nvtuneLswn0lkfSTwsKOyuomzvJpvUdxAqFQeqmsYwnuBLtOb80LPWof-oqLs1TMbKJbr56nuh2nZeQH12UrabHrYLYZ04vocDNaILe0IQLpsqqzHbFPHLz5ItljBFmZ-P4N01YI6g-KVqCzXAXvFIYEOwNtJPJb3SGUtYt4HbSzRL28cSXIS9h_0rO8TUn77blwHJYmnIaY1E53XKzAmC0C1l3dXDqejIK9EzmnZk6E8C7Z9WLE4OKHupeWPAc0cRa-UbVtLq5hyWglSwNyQ15HuH0kuUCpTczzUuCMKJXaj0LikunkwDW2-8Nwk9dscF7TvFYWF3d8YkCE6nU1Yu2FoTWcFsap9DxxwyIOln0sX0Xs6oDPuLUOrW9eGU5n1tctP_RGladkMC3cy5IpXyFZFjvHOq4Aiw4bkJrxc_lNfwRIKJYF8zQR03REwcXaSTe4LZz2jMosqwxNkuDZa4B2G78NMEkNIDU5o4-u97NX0oC_1gfYMTW2IMbYM2agtoCl_Pox6UpQAgvXXRo5TtJqS8FMLjG4dDmWo0Isc4CwnYxALmXDzjLKBTC1dOAdI6kkj_xIxytrHMZfRzdmlJ1Ga1Oq5_TU0VJ=s969-no",
      paroquia: "NSG"
    }


  ]

  constructor(breakpointObserver: BreakpointObserver) { 
 
  }

  ngOnInit() {

    console.log(this.cursistas)
  }

}
