export class Mensagem {
    codigo: string;
    descricao: string;
    descricoMinusculo: string;
    private data: number;

    constructor(codigo:string, descricao:string){
        this.codigo = codigo;
        this.descricao = descricao;
        this.descricoMinusculo = descricao.toLowerCase();
        this.data = new Date().getTime(); 
    }
}
