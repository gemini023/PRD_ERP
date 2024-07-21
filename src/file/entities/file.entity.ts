import { Auth } from "src/auth/entities/auth.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("files")
export class File {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    fileFormat: string

    @OneToOne(() => Auth, user => user.id, {
        cascade: true
    })
    
    @JoinColumn()
    user: Auth

}
