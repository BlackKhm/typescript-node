import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class Model extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    // constructor(model?: Partial<any>) {
    //     super()
    //     Object.assign(this, model)
    // }

    toJSON() {
        return { ...this, id: undefined }
    }

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;

}