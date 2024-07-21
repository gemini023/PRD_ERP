import { IsString, IsEmail, IsOptional, IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class CreateAuthDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(8, 100)
    password: string;
}
