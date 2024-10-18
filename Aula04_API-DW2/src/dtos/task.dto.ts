import { IsNotEmpty, IsString, IsOptional, IsInt, IsBoolean } from "class-validator";


export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title!: string

    @IsOptional()
    @IsBoolean()
    completed?: boolean

    @IsInt()
    @IsNotEmpty()
    userId!: number
}


export class updateTaskDTO{
    @IsString()
    @IsNotEmpty()
    title!: string
    
    @IsOptional()
    @IsBoolean()
    completed?: boolean
}