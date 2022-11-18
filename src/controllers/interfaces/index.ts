import {  StudentBasicResponse } from "../types"
import { CreateStudent, UpdateStudent } from "../classes"

export interface IStudentController{
    getStudent(id?:string) : Promise<StudentBasicResponse>
    deleteStudent(id:string) : Promise<any>
    createStudent(StudentData: CreateStudent): Promise<StudentBasicResponse>
    updateStudent(id:string, StudentData: UpdateStudent ): Promise<any>
}