import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitialSchema1742597948065 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
