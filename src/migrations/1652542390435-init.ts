import { MigrationInterface, QueryRunner } from "typeorm";

export class init1652542390435 implements MigrationInterface {
    name = 'init1652542390435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "menus" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "photo" character varying NOT NULL, "is_publish" boolean NOT NULL, CONSTRAINT "PK_3fec3d93327f4538e0cbd4349c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dishes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "categoryId" uuid NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "photo" character varying NOT NULL, "is_publish" boolean NOT NULL, "ingredients" text array NOT NULL DEFAULT '{}', "price" integer NOT NULL, CONSTRAINT "PK_f4748c8e8382ad34ef517520b7b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "menuId" uuid NOT NULL, "title" character varying NOT NULL, "photo" character varying NOT NULL, "is_visible" boolean NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dishes" ADD CONSTRAINT "FK_9491dfcdc274899d7c73722987b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_d537a93225b779e9ef8f5598c5a" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_d537a93225b779e9ef8f5598c5a"`);
        await queryRunner.query(`ALTER TABLE "dishes" DROP CONSTRAINT "FK_9491dfcdc274899d7c73722987b"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "dishes"`);
        await queryRunner.query(`DROP TABLE "menus"`);
    }

}
