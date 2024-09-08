const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database);

db[collection].find({
    "cpf": "123.456.789-00"},
    { "cod_turma": 101, 
      "nome": "Lucas Ferreira",
      "rg": "MG-12.345.678",
      "telefone_aluno": "(31) 91234-5678",
      "telefone_responsavel": "(31) 99876-5432",
      "email": "lucas.ferreira@email.com",
      "data_nascimento": "2000-05-15T00:00:00Z"
    }
)