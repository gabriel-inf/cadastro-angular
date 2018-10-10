export class Cursista {

    nome: string;
    paroquia: string;
    rg: string; //
    tamanhoCamisa: string;  //
    quarto: string; //
    onibus: number; //
    descricao: string; //
    sexo: string; //
    ativa: boolean; //
    foto: string; //
    canhoto: boolean; //
    comunidade: string;


    public constructor() {
        this.nome = ""; //
        this.paroquia = ""; //
        this.rg = ""; //
        this.tamanhoCamisa = ""; //
        this.quarto = ""; //
        this.onibus = 0; //
        this.descricao = ""; //
        this.sexo = "f"; //
        this.ativa = true;
        this.foto = "";
        this.canhoto = false;
        this.comunidade = "";
    }

}
