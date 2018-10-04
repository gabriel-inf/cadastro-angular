export class Cursista {

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


    public constructor() {
        this.nome = ""; //
        this.paroquia = ""; //
        this.cpf = ""; //
        this.tamanhoCamisa = ""; //
        this.quarto = ""; //
        this.onibus = 0; //
        this.descricao = ""; //
        this.sexo = ""; //
        this.ativa = true;
        this.foto = "";
        this.canhoto = false;
    }

}
