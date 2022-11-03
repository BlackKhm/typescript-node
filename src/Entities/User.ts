import { IsEmail, Length } from "class-validator";
import { Column, Entity,ViewEntity, ViewColumn  } from 'typeorm';
import { Model } from "./Model";

@Entity("users")
export class Users extends Model {
    @Column({ nullable: true, default: 0 })
    name!: string;

    @Column({ nullable: true, default: null })
    @Length(5, 50, { message: "Username must be between 5 to 50 charaters" })
    username!: String;

    @Column({ nullable: true, default: "Partner", comment: "Administrator, Partner, Customer" })
    @Length(1, 20)
    user_type!: string;

    @Column({ nullable: true })
    profile!: String;

    @Column({ nullable: true, unique: true })
    @Length(5, 20)
    code!: String;

    @Column({ default: 0, nullable: true })
    @IsEmail()
    email!: string;

    @Column({ default: 0, nullable: true })
    password!: string;

    @Column({ nullable: true, default: null })
    phone!: string;

    @Column({ nullable: true })
    added_by!: string

    @Column({ default: false, comment: "true or false" })
    isActive!: boolean;

    @Column({ default: true, comment: "1=banned or 0=Open" })
    banned!: boolean;

    @Column({ default: false, comment: "true or false" })
    isOnline!: boolean;
}
