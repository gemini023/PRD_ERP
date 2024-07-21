import { File } from "src/file/entities/file.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class Auth {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({
        unique: true,
        nullable: false
    })
    username: string

    @Column({
        nullable: false,
        unique: true
    })
    email: string

    @Column({
        nullable: false,
    })
    password: string

    @Column()
    phoneNumber?: number

    @OneToOne(() => File, file => file.id)

    @Column()
    createdAt: string

    @Column()
    updatedAt: string

}
function OnetoOne(): (target: Auth, propertyKey: "createdAt") => void {
    throw new Error("Function not implemented.")
}

