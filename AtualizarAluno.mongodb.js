const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database);

db[collection].updateMany(
  { cod_aluno: 1 },

  { $set: { "nome": "Guilherme Simões", "cpf": "000.000.000.00", "rg": "SP-00.000.000" } }
);
