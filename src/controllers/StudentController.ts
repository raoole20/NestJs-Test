import { Body, Controller, Delete, Get, Logger, Param, Post, Query, UsePipes, ValidationPipe, Put } from '@nestjs/common'
import { Route } from 'tsoa';
import { IStudentController } from "./interfaces";
import { CreateStudent, StudentBasicResponse, UpdateStudent } from './types';

@Route('/api/v1/student')
@Controller('/api/v1/student')
export class StudentController implements IStudentController{

    private readonly logger = new Logger(StudentController.name) 

    constructor(){}

    /**
     * Find all students || Find Student by id
     * @param { string } id optional parameter, to search for a student with that ID
     * @return { StudentBasicResponse }
     */
    @Get('/')
    async getStudent(@Query('id')id?: string): Promise<StudentBasicResponse> {
        if( id ){
            //  find for id
            // TODO Crear una funcion que busque por id
            return {
                name: 'the id is ' + id,
                age: 12,
                phone: '',
                email: '',
                Qualification: []
            }
        }else{
            // find all
            return {
                name: 'hello',
                age: 12,
                phone: '',
                email: '',
                Qualification: []
            }
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
        this.logger.debug(`param Body is ${Body}`)
        return {
            name: 'post',
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
    @UsePipes()
    @Put(':id')
    async updateStudent(@Param('id')id: string, @Body(new ValidationPipe())StudentData: UpdateStudent): Promise<any> {
        this.logger.debug(`Param ${id} Body ${StudentData}`, StudentData)
        return {
            message: "holi"
        }
    }

    /**
     * Delete a student with a id
     * @param { string } id student id
     */
    @Delete(':id')
    async deleteStudent(@Param('id')id: string): Promise<any> {
        this.logger.debug(`[api/v1/student/${id}] Delete Param is ${id}`)
        return {
            message: 'delte work'
        }
    }
}