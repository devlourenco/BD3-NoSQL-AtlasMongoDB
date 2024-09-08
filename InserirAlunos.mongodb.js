const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database);

db[collection].insertMany(
  [
    {
      "cod_aluno": 1,
      "cod_turma": 101,
      "nome": "Lucas Ferreira",
      "cpf": "123.456.789-00",
      "rg": "MG-12.345.678",
      "telefone_aluno": "(31) 91234-5678",
      "telefone_responsavel": "(31) 99876-5432",
      "email": "lucas.ferreira@email.com",
      "data_nascimento": "2000-05-15T00:00:00Z"
    },
    {
      "cod_aluno": 2,
      "cod_turma": 101,
      "nome": "Ana Clara Souza",
      "cpf": "987.654.321-00",
      "rg": "MG-87.654.321",
      "telefone_aluno": "(31) 92345-6789",
      "telefone_responsavel": "(31) 91234-5678",
      "email": "ana.clara@email.com",
      "data_nascimento": "1999-12-01T00:00:00Z"
    },
    {
      "cod_aluno": 3,
      "cod_turma": 102,
      "nome": "João Pedro Lima",
      "cpf": "654.321.987-00",
      "rg": "SP-45.678.123",
      "telefone_aluno": "(11) 93456-7890",
      "telefone_responsavel": "(11) 92345-6789",
      "email": "joao.pedro@email.com",
      "data_nascimento": "1998-03-22T00:00:00Z"
    },
    {
      "cod_aluno": 4,
      "cod_turma": 102,
      "nome": "Mariana Oliveira",
      "cpf": "321.987.654-00",
      "rg": "RJ-34.567.890",
      "telefone_aluno": "(21) 95678-1234",
      "telefone_responsavel": "(21) 94567-8901",
      "email": "mariana.oliveira@email.com",
      "data_nascimento": "2001-07-10T00:00:00Z"
    },
    {
      "cod_aluno": 5,
      "cod_turma": 103,
      "nome": "Pedro Henrique Alves",
      "cpf": "111.222.333-44",
      "rg": "MG-12.345.679",
      "telefone_aluno": "(31) 93456-7891",
      "telefone_responsavel": "(31) 91234-5679",
      "email": "pedro.henrique@email.com",
      "data_nascimento": "1997-09-15T00:00:00Z"
    },
    {
      "cod_aluno": 6,
      "cod_turma": 103,
      "nome": "Isabela Martins",
      "cpf": "222.333.444-55",
      "rg": "SP-45.678.124",
      "telefone_aluno": "(11) 91234-5670",
      "telefone_responsavel": "(11) 93456-7892",
      "email": "isabela.martins@email.com",
      "data_nascimento": "2002-02-27T00:00:00Z"
    },
    {
      "cod_aluno": 7,
      "cod_turma": 104,
      "nome": "Felipe Gonçalves",
      "cpf": "333.444.555-66",
      "rg": "RJ-34.567.891",
      "telefone_aluno": "(21) 92345-6781",
      "telefone_responsavel": "(21) 95678-1235",
      "email": "felipe.goncalves@email.com",
      "data_nascimento": "1996-06-09T00:00:00Z"
    },
    {
      "cod_aluno": 8,
      "cod_turma": 104,
      "nome": "Camila Ribeiro",
      "cpf": "444.555.666-77",
      "rg": "MG-12.345.680",
      "telefone_aluno": "(31) 94567-8902",
      "telefone_responsavel": "(31) 92345-6782",
      "email": "camila.ribeiro@email.com",
      "data_nascimento": "2000-08-23T00:00:00Z"
    },
    {
      "cod_aluno": 9,
      "cod_turma": 105,
      "nome": "Gabriel Costa",
      "cpf": "555.666.777-88",
      "rg": "SP-45.678.125",
      "telefone_aluno": "(11) 95678-1236",
      "telefone_responsavel": "(11) 94567-8903",
      "email": "gabriel.costa@email.com",
      "data_nascimento": "1999-11-17T00:00:00Z"
    },
    {
      "cod_aluno": 10,
      "cod_turma": 105,
      "nome": "Juliana Silva",
      "cpf": "666.777.888-99",
      "rg": "RJ-34.567.892",
      "telefone_aluno": "(21) 93456-7893",
      "telefone_responsavel": "(21) 92345-6783",
      "email": "juliana.silva@email.com",
      "data_nascimento": "1998-04-04T00:00:00Z"
    }
  ]
)