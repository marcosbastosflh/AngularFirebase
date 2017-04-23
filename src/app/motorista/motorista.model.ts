export class Motorista {
    codigo: string;
    descricao: string;
    qtd: number;
    private data: number;

    constructor(codigo: string, descricao: string) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.qtd = 0;
        this.data = new Date().getTime();
    }
}
