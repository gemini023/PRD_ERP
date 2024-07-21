import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { IsString, IsNotEmpty, Length, IsDate, IsUUID, IsEnum } from 'class-validator';

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn('uuid')
    @IsUUID()
    id: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    @Length(5, 100)
    title: string;

    @Column('text')
    @IsString()
    @IsNotEmpty()
    description: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    @Length(2, 50)
    category: string;


    @Column('date')
    @IsDate()
    startDate: Date;

    @Column('date')
    @IsDate()
    endDate: Date;

    @ManyToOne(() => User, user => user.courses)
    instructor: User;

    @OneToMany(() => Enrollment, enrollment => enrollment.course)
    enrollments: Enrollment[];
}
