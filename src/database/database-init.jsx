import { DatabaseConnection } from "./database-connection";

var db = null;
export default class DatabaseInit {
  constructor() {
    db = DatabaseConnection.getConnection();
    db.exec([{ sql: "PRAGMA FOREIGN KEYS = ON;", args: [] }], false, () =>
      console.log("FOREIGN KEYS TURNED ON")
    );
    this.InitDb();
  }
  InitDb() {
    var sql = [
      // Deleta as tabelas existentes
      `DROP TABLE IF EXISTS patagem;`,
      `DROP TABLE IF EXISTS solo;`,
      `DROP TABLE IF EXISTS raca;`,
      `DROP TABLE IF EXISTS cor_identificacao;`,
      `DROP TABLE IF EXISTS usuario;`,
      `DROP TABLE IF EXISTS local;`,
      `DROP TABLE IF EXISTS piquete;`,
      `DROP TABLE IF EXISTS animal;`,
      `DROP TABLE IF EXISTS peso_animal;`,

      // Cria tabela de tipo de Pastagem
      `CREATE TABLE IF NOT EXISTS pastagem (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT
        );`,
      // Cria tabela de tipo de Solo
      `CREATE TABLE IF NOT EXISTS solo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT
      );`,
      // Cria tabela de Raca
      `CREATE TABLE IF NOT EXISTS raca (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT
        );`,
      // Cria tabela de Cor de Identificacao
      `CREATE TABLE IF NOT EXISTS cor_identificacao (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT
        );`,
      // Cria tabela de Usuario
      `create table if not exists usuario (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT,
                contato TEXT,
                senha TEXT,
                data_nascimento TEXT,
                foto TEXT,
                data_cadastro TEXT,
                data_exclusao TEXT,
                ativo INTEGER,
            );`,
      // Cria tabela de Local
      `create table if not exists local (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                usuario_id INTEGER,
                nome TEXT,
                cep TEXT,
                estado TEXT,
                cidade TEXT,
                logradouro TEXT,
                numero INTEGER,
                data_cadastro TEXT,
                data_exclusao TEXT,
                ativo INTEGER,
                FOREIGN KEY (usuario_id) references usuario (id)
            );`,
      // Cria tabela de Piquete
      `create table if not exists piquete (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                local_id INTEGER,
                tipo_pastagem_id INTEGER,
                tipo_solo_id INTEGER,
                nome TEXT,
                data_cadastro TEXT,
                data_exclusao TEXT,
                ativo INTEGER,
                FOREIGN KEY (local_id) REFERENCES local (id),
                FOREIGN KEY (tipo_pastagem_id) REFERENCES pastagem (id),
                FOREIGN KEY (tipo_solo_id) REFERENCES solo (id)
                );`,
      // Cria tabela de Animal
      `create table if not exists animal (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            piquete_id INTEGER,
            cor_identificacao_id INTEGER,
            numero_identificacao INTEGER,
            raca_id INTEGER,
            data_nascimento TEXT,
            descricao TEXT,
            sexo INTEGER,
            inteiro INTEGER,
            prenha INTEGER,
            data_cadastro TEXT,
            data_exclusao TEXT,
            ativo INTEGER,
            FOREIGN KEY (piquete_id) REFERENCES piquete (id),
            FOREIGN KEY (cor_identificacao_id) REFERENCES cor_identificacao (id),
            FOREIGN KEY (raca_id) REFERENCES raca (id)
            );`,
      // Cria tabela de Peso Animal
      `CREATE TABLE IF NOT EXISTS peso_animal (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            animal_id INTEGER,
            peso REAL,
            data_cadastro TEXT,
            ativo INTEGER,
            FOREIGN KEY (animal_id) REFERENCES animal (id)
        );`,

      // Carga de dados na tabela de tipo de Pastagem
      `insert into pastagem (nome) values('Nativa');`,
      `insert into pastagem (nome) values('Capim-Mombaça');`,
      `insert into pastagem (nome) values('Capim-Massai');`,
      `insert into pastagem (nome) values('Capim-Tanzânia');`,
      `insert into pastagem (nome) values('BRS Zuri');`,
      `insert into pastagem (nome) values('BRS Quênia');`,
      // Carga de dados na tabela de tipo de Solo
      `insert into solo (nome) values('Arenoso');`,
      `insert into solo (nome) values('Argiloso');`,
      `insert into solo (nome) values('Siltoso');`,
      `insert into solo (nome) values('Húmico');`,
      `insert into solo (nome) values('Cárstico');`,
      // Carga de dados na tabela de Raca
      `insert into raca (nome) values('Angus');`,
      `insert into raca (nome) values('Belgian Blue');`,
      `insert into raca (nome) values('Braford');`,
      `insert into raca (nome) values('Brahman');`,
      `insert into raca (nome) values('Brangus');`,
      `insert into raca (nome) values('Caracu');`,
      `insert into raca (nome) values('Charolês');`,
      `insert into raca (nome) values('Chianina');`,
      `insert into raca (nome) values('Devon');`,
      `insert into raca (nome) values('Guzerá');`,
      `insert into raca (nome) values('Hereford');`,
      `insert into raca (nome) values('Limousin');`,
      `insert into raca (nome) values('Nelore');`,
      `insert into raca (nome) values('Tabapuã');`,
      `insert into raca (nome) values('Senepol');`,
      `insert into raca (nome) values('Simental');`,
      `insert into raca (nome) values('Wagyu');`,
      // Carga de dados na tabela de Cor de Identificacao
      `insert into cor_identificacao (nome) values('Amarelo');`,
      `insert into cor_identificacao (nome) values('Azul');`,
      `insert into cor_identificacao (nome) values('Branco');`,
      `insert into cor_identificacao (nome) values('Cinza');`,
      `insert into cor_identificacao (nome) values('Verde');`,
      `insert into cor_identificacao (nome) values('Vermelho');`,
      `insert into cor_identificacao (nome) values('Rosa');`,
    ];

    db.transaction(
      (tx) => {
        for (var i = 0; i < sql.length; i++) {
          console.log("execute sql : " + sql[i]);
          tx.executeSql(sql[i]);
        }
      },
      (error) => {
        console.log("error call back : " + JSON.stringify(error));
      },
      () => {
        console.log("transaction complete call back ");
      }
    );
  }
}
