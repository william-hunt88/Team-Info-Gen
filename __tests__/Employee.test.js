const Employee = require('../lib/Employee.js')

test('creates and employee', () => {
    const employee = new Employee('Dave', '537', 'dave@davesmail.com')

    expect(employee.name).toBe('Dave')
})