import { Length, IsNumber, IsEmail, Min, Max, MaxLength, IsString, IsDateString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger/dist';

export class StudentResponse {
    @ApiProperty()
    id: string;
    
    @ApiProperty({
        description: 'The name of a student',
        type: Number,
        default: 'name'
    })
    name: string;

    @ApiProperty({
        description: 'The number of a student',
        type: String,
        default: 5
    })
    age: number;

    @ApiProperty({
        description: 'The phone of a student',
        type: String,
        default: '+58 00000000'
    })
    phone: string;

    @ApiProperty({
        description: 'The email of a student',
        type: String,
        default: 'test@test.com'
    })
    email: string;

    @ApiProperty({
        description: 'collection of student grades',
        type: [],
        default: [{
            course: 'Math',
            qualification: 10
        }]
    })
    qualification: object[];
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


    qualification: object[];
}

export class UpdateStudent extends PartialType(CreateStudent){}