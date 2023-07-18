import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      
      table.increments('student_id')
      table.string('student_number', 255).notNullable()
      table.string('fname', 255).notNullable()
      table.string('lname', 255).notNullable()
      table.string('email', 255)
      table.string('phone', 255)    

      table.dateTime('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
