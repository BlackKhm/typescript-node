// import { IsEmail, Length } from "class-validator";
import { Column, Entity,ViewEntity, ViewColumn  } from 'typeorm';
import { Model } from "./Model";

@Entity("users")
export class Users extends Model {
    @Column("varchar", { length: 200 })
    first_name!: string

    // @Column({
    //     type: "boolean",
    //     // length: 150,
    //     unique: true,
    //     // ...
    // })
    // names!: string

    // @Column("simple-json")
    // profile!: { name: string; nickname: string }

    @Column()
    title!: string

    @Column()
    description!: string

    @Column()
    size!: string
}
