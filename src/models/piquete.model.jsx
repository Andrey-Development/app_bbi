export class Piquete {
  constructor(
    id,
    local_id,
    tipo_pastagem_id,
    tipo_solo_id,
    nome,
    data_cadastro,
    data_exclusao,
    ativo
  ) {
    this.id = id;
    this.local_id = local_id;
    this.tipo_pastagem_id = tipo_pastagem_id;
    this.tipo_solo_id = tipo_solo_id;
    this.nome = nome;
    this.data_cadastro = data_cadastro;
    this.data_exclusao = data_exclusao;
    this.ativo = ativo;
  }
}
