export class Mensagem {
    codigo: string;
    descricao: string;
    data: number;

    constructor(descricao:string){
        //this.codigo = codigo;
        this.descricao = descricao;
        this.data = new Date().getTime(); 
    }
}
