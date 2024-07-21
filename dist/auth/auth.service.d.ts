import { CreateAuthDto } from './dto/sign-up.dto';
import { UpdateAuthDto } from './dto/sign-in.dto';
export declare class AuthService {
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
