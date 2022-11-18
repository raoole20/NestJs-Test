import { Length, IsNumber, IsEmail, Min, Max, MaxLength, IsString, IsDateString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types';

export type StudentBasicResponse = {
    name: string,
    age: number,
    phone: string,
    email: string, 
    Qualification: []
}

export class CreateStudent {
    @IsString()
    @Length(5, 25)
    name: string;

    @IsNumber()
    @Min(5)
    @Max(150)
    age: number;
    
    @IsString()
    @MaxLength(20)
    phone: string;

    @IsEmail()
    email: string;
    Qualification: [{
        class: 'string',
        qualification: 'number',
    }];
}

export class UpdateStudent extends PartialType(CreateStudent){}