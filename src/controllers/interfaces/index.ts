import { CreateStudent, UpdateStudent } from "../types"

export interface IStudentController{
    getStudent(id?:string) : Promise<any>
    deleteStudent(id:string) : Promise<any>
    createStudent(StudentData: CreateStudent): Promise<any>
    updateStudent(id:string, StudentData: UpdateStudent ): Promise<any>
}