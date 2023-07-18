// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class StudensController {

    public async index({ response }) {
        const studenList = await Student.all()
        if(!studenList || studenList.length == 0) { return response.notFound({ message: 'Student not found' }) }
        return response.ok(studenList)
    }

    public async show({ params, response }) {

        const { id }: { id: Number } = params
        const student: any = await Student.find(id)
        if (!student) {
            return response.notFound({ message: 'Student not found' })
        }
        return response.ok(student)

    }

    public async store({ request, response }) {

        const StudentSchema = schema.create({

            student_number: schema.string({ trim: true }, [
                rules.maxLength(255)
            ]),
            fname: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),
            lname: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),
            email: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),
            phone: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),

        })

        const payload: any = await request.validate({ schema: StudentSchema })

        const result: Student = await Student.create(payload)

        return response.ok(result)
    }

    public async update({ request, params, response }) {

        const StudentSchema = schema.create({

            student_number: schema.string({ trim: true }, [
                rules.maxLength(255)
            ]),
            fname: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),
            lname: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),
            email: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),
            phone: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),

        })

        const payload: any = await request.validate({ schema: StudentSchema })

        const { id }: { id: Number } = params

        const student: any = await Student.find(id)

        if (!student) {
            return response.notFound({ message: 'Student not found' })
        }

        
        student.student_number = payload.student_number
        student.fname = payload.fname
        student.lname = payload.lname
        student.email = payload.email
        student.phone = payload.phone
        const { updated_at } = student;
        student.merge({ ...payload, updated_at });

        await student.save();
        return response.ok(student)
    }

    public async destroy({ params, response }) {
            
            const { id }: { id: Number } = params
    
            const student: any = await Student.find(id)
            if (!student) {
                return response.notFound({ message: 'Student not found' })
            }
    
            await student.delete()
            return response.ok({ message: 'Student deleted successfully' })
    }

}
