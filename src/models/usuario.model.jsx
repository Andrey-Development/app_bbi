export class Usuario {
  constructor(
    id,
    nome,
    email,
    contato,
    senha,
    data_nascimento,
    foto,
    data_cadastro,
    data_exclusao,
    ativo
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.contato = contato;
    this.senha = senha;
    this.data_nascimento = data_nascimento;
    this.foto = foto;
    this.data_cadastro = data_cadastro;
    this.data_exclusao = data_exclusao;
    this.ativo = ativo;
  }
}
