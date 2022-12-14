import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaCandidatura1669943636411 implements MigrationInterface {
    name = 'CriarTabelaCandidatura1669943636411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "esq_grow"."endereco" ("id" SERIAL NOT NULL, "rua" character varying NOT NULL, "cidade" character varying NOT NULL, "uf" character varying NOT NULL, "complemento" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2a6880f71a7f8d1c677bb2a32a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "esq_grow"."growdever" ("id" character varying NOT NULL, "nome" character varying(60) NOT NULL, "cpf" integer NOT NULL, "idade" integer NOT NULL, "skills" character varying, "id_endereco" integer NOT NULL, CONSTRAINT "REL_a65e6314134b1eefafdad82229" UNIQUE ("id_endereco"), CONSTRAINT "PK_e4de93ef840d0194b464e76b34b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "esq_grow"."avaliacao" ("id" character varying NOT NULL, "modulo" character varying NOT NULL, "nota" integer NOT NULL, "mentor" character varying, "id_growdever" character varying NOT NULL, CONSTRAINT "PK_fd3e156019eb4b68c6c9f746d51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "esq_grow"."growdever" ADD CONSTRAINT "FK_a65e6314134b1eefafdad82229e" FOREIGN KEY ("id_endereco") REFERENCES "esq_grow"."endereco"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "esq_grow"."avaliacao" ADD CONSTRAINT "FK_25b840d42859e330f25fcbbc4b6" FOREIGN KEY ("id_growdever") REFERENCES "esq_grow"."growdever"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "esq_grow"."avaliacao" DROP CONSTRAINT "FK_25b840d42859e330f25fcbbc4b6"`);
        await queryRunner.query(`ALTER TABLE "esq_grow"."growdever" DROP CONSTRAINT "FK_a65e6314134b1eefafdad82229e"`);
        await queryRunner.query(`DROP TABLE "esq_grow"."avaliacao"`);
        await queryRunner.query(`DROP TABLE "esq_grow"."growdever"`);
        await queryRunner.query(`DROP TABLE "esq_grow"."endereco"`);
    }

}
