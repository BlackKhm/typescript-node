// import { IsEmail, Length } from "class-validator";
import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Model } from "./Model";
// import { Product } from "./Product";
// import { UserContact } from "./UserContact";

// import { Organization } from "./Organization";
// import { Purchase } from "./Purchase";
// import { Partner } from "./Partner";
// import { GoodsReceipt } from "./GoodsReceipt";
// import { Invoice } from "./Invoice";
// import { Review } from "./Review";
// import { Role } from './Role';
// import { Receipt } from "./Receipt";
// import { AccountType } from "./AccountType";
// import { AccountName } from './AccountName';


@Entity("users")
export class Users extends Model {
    @Column({ nullable: false, default: 0 })
    name!: string;

    @Column({ nullable: false, default: null })
    // @Length(5, 50, { message: "Username must be between 5 to 50 charaters" })
    username!: string;

    @Column({ nullable: false, default: "Partner", comment: "Administrator, Partner, Customer" })
    // @Length(1, 20)
    user_type!: string;

    // @OneToMany(() => AccountType, accounttype => accounttype.creator)
    // accounttype!: AccountType;

    // @OneToMany(() => AccountName, accounttype => accounttype.creator)
    // accountname!: AccountName;

    @Column({ nullable: true })
    profile!: String;

    @Column({ nullable: false, unique: true })
    // @Length(5, 20)
    code!: String;

    @Column({ default: 0, nullable: true })
    // @IsEmail()
    email!: string;

    @Column({ default: 0, nullable: true })
    password!: string;

    //@BeforeInsert()
    //async hashPassword() {
    //    this.password = await bcrypt.hash(this.password, 10);
    //}

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

    // @OneToOne(() => UserContact, contact => contact.user) // specify inverse side as a second parameter
    // contact!: UserContact;

    // @OneToMany(() => Product, product => product.user)
    // product!: Product;

    // @ManyToOne(() => Role, role => role.user)
    // role!: Role;

    // @ManyToMany(() => Organization, organzation => organzation.user)
    // @JoinTable({
    //     name: 'user_organizations',
    //     joinColumn: {
    //         name: 'userId',
    //     },
    //     inverseJoinColumn: {
    //         name: 'organizationId',
    //     }
    // })
    // organization!: Organization[];

    // @OneToMany(() => Purchase, purchase => purchase.user)
    // purchase!: Purchase;

    // @OneToMany(() => Purchase, purchase => purchase.approved_by)
    // purchase_approver!: Purchase;

    // @OneToMany(() => GoodsReceipt, goodsreceipt => goodsreceipt.user)
    // goodsreceipt!: GoodsReceipt;

    // @OneToMany(() => Partner, partner => partner.user)
    // partner!: Partner;

    // @OneToMany(() => Partner, partner => partner.added_by)
    // created_by!: Partner

    // @OneToMany(() => Invoice, invoice => invoice.user)
    // invoice!: Invoice;

    // @OneToMany(() => Review, review => review.user)
    // review!: Review;

    // @OneToMany(() => Receipt, (receipt) => receipt.saleperson)
    // saleperson!: Receipt;

    // @OneToMany(() => Receipt, (receipt) => receipt.user)
    // receipt!: Receipt;

}