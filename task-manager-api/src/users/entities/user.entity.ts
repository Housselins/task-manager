import {Entity, Column, DeleteDateColumn} from "typeorm";

@Entity()
export class User {

    @Column({primary:true, generated:true})
    id: number;

    @Column({nullable:false})
    usuario: string;

    @Column({ unique: true, nullable:false})
    email: string;

    @Column({ unique: true, nullable:false})
    password: string;
}
