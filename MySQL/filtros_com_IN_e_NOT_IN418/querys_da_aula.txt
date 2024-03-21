SELECT * FROM `tb_alunos` WHERE interesse = 'Jogos' OR interesse = 'Esporte' OR interesse = 'Música';



SELECT * FROM `tb_alunos` WHERE interesse IN('Jogos', 'Esporte', 'Música');


SELECT * FROM `tb_alunos` WHERE interesse NOT IN('Jogos', 'Esporte', 'Música');