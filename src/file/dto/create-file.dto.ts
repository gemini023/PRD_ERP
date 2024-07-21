import { IsString, IsUUID, IsNotEmpty } from 'class-validator';

export class CreateFileDto {
    
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    fileFormat: string;

}
