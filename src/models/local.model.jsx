export class Local{
    constructor (
        id,
        usuario_id,
        nome,
        cep,
        estado,
        cidade,
        logradouro,
        numero,
        data_cadastro,
        data_exclusao,
        ativo
    ){
        this.id = id;
        this.usuario_id = usuario_id;
        this.nome = nome;
        this.cep = cep;
        this.estado = estado;
        this.cidade = cidade;
        this.logradouro = logradouro;
        this.numero = numero;
        this.data_cadastro = data_cadastro;
        this.data_exclusao = data_exclusao;
        this.ativo = ativo;
    }
}