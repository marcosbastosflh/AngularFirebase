export class Mensagem {
    codigo: string;
    descricao: string;
    descricaoMinusculo: string;
    private data: number;

    constructor(codigo: string, descricao: string) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.descricaoMinusculo = descricao.toLowerCase();
        this.data = new Date().getTime();
    }
}
