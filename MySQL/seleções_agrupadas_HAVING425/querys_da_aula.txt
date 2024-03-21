SELECT estado, COUNT(*) as total_de_registros FROM `tb_alunos` GROUP BY estado;

SELECT estado, COUNT(*) as total_de_registros FROM `tb_alunos` GROUP BY estado HAVING total_de_registros >= 5;

SELECT estado, COUNT(*) as total_de_registros FROM `tb_alunos` GROUP BY estado HAVING estado IN ('MG', 'SP');

SELECT estado, COUNT(*) as total_de_registros FROM `tb_alunos` GROUP BY estado HAVING estado IN ('CE', 'SC') AND total_de_registros > 4;

SELECT estado, COUNT(*) as total_de_registros FROM `tb_alunos` WHERE interesse != 'Esporte' GROUP BY estado HAVING total_de_registros > 3;