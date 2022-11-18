import { Body, Controller, Delete, Get, Logger, Param, Post, Query, UsePipes, ValidationPipe, Put } from '@nestjs/common'
import { Route } from 'tsoa';
import { IStudentController } from "./interfaces";
import { CreateStudent, StudentBasicResponse, UpdateStudent } from './types';

@Route('/api/v1/Student')
@Controller('/api/v1/Student')
export class StudentController implements IStudentController{

    private readonly logger = new Logger(StudentController.name) 

    constructor(){}

    /**
     * Find all students || Find Student by id
     * @param { string } id optional parameter, to search for a student with that ID
     * @return { StudentBasicResponse }
     */
    @Get('/')
    async getStudent(@Query()id?: string): Promise<StudentBasicResponse> {
        return {
            name: '',
            age: 12,
            phone: '',
            email: '',
            Qualification: []
        }
    }

    /**
     * Create a new student
     * @param { CreateStudent } StudentData Object with all the properties of the Student class
     * @returns { StudentBasicResponse }
     */
    @UsePipes()
    @Post('/')
    async createStudent(@Body(new ValidationPipe()) StudentData: CreateStudent): Promise<StudentBasicResponse> {
        return {
            name: '',
            age: 12,
            phone: '',
            email: '',
            Qualification: []
        }
    }

    /**
     * Update a student with an id
     * @param { string } id student id
     * @param { UpdateStudent } StudentData Student data to be updated
     */
    @Put(':id')
    async updateStudent(@Param()id: string, @Body()StudentData: UpdateStudent): Promise<any> {
        
    }

    /**
     * Delete a student with a id
     * @param { string } id student id
     */
    @Delete(':id')
    async deleteStudent(id: string): Promise<any> {
        
    }
}