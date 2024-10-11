import { IsNotEmpty, IsString, IsEmail, MinLength, IsOptional } from "class-validator";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password!: string

}


export class updateUserDTO{
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string

    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password?: string
}