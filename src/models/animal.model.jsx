export class Animal {
  constructor(
    id,
    piquete_id,
    cor_identificacao_id,
    numero_identificacao,
    raca_id,
    data_nascimento,
    descricao,
    sexo,
    inteiro,
    prenha,
    data_cadastro,
    data_exclusao,
    ativo,
  ) {
    this.id = id;
    this.piquete_id = piquete_id;
    this.cor_identificacao_id = cor_identificacao_id;
    this.numero_identificacao = numero_identificacao;
    this.raca_id = raca_id;
    this.data_nascimento = data_nascimento;
    this.descricao = descricao;
    this.sexo = sexo;
    this.inteiro = inteiro;
    this.prenha = prenha;
    this.data_cadastro = data_cadastro;
    this.data_exclusao = data_exclusao;
    this.ativo = ativo;
  }
}
