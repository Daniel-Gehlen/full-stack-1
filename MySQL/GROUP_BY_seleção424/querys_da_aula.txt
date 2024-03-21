SELECT * FROM `tb_alunos` GROUP BY interesse;

SELECT *, count(*) FROM `tb_alunos` GROUP BY interesse;

SELECT interesse, count(*) FROM `tb_alunos` GROUP BY interesse;


SELECT interesse, count(*) AS total_por_interesse FROM `tb_alunos` GROUP BY interesse;

SELECT * FROM `tb_alunos` GROUP BY estado;

SELECT estado, COUNT(*) AS total_por_interesse FROM `tb_alunos` WHERE estado = 'ES'; 


