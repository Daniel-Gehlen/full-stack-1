SELECT * FROM `tb_alunos` WHERE nome = 'Evelyn';

SELECT * FROM `tb_alunos` WHERE nome LIKE '%e';
SELECT * FROM `tb_alunos` WHERE nome LIKE '%ne';
SELECT * FROM `tb_alunos` WHERE nome LIKE '%a%';
SELECT * FROM `tb_alunos` WHERE nome LIKE 'C%';

SELECT * FROM `tb_alunos` WHERE nome LIKE '_riel';
SELECT * FROM `tb_alunos` WHERE nome LIKE '_ru_';

SELECT * FROM `tb_alunos` WHERE nome LIKE 'I__';