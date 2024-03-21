ALTER TABLE tb_cursos ADD COLUMN carga_horaria VARCHAR(5) NOT NULL;

ALTER TABLE tb_cursos CHANGE carga_horaria carga_hora INT(5) NULL;

ALTER TABLE tb_cursos CHANGE carga_hora carga_horaria INT(5);

ALTER TABLE tb_cursos DROP carga_horaria;

ALTER TABLE tb_cursos ADD carga_horaria INT(5) NULL;