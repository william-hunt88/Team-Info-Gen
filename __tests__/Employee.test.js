const Employee = require('../lib/Employee.js')

test('creates and employee', () => {
    const employee = new Employee('Dave', 537, 'dave@davesmail.com')

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(537);
    expect(employee.email).toBe('dave@davesmail.com')
});

test('get employee name', () => {
    const employee = new Employee('Dave')

    expect(employee.getName()).toBe('Dave');
});

test('get employee id', () => {
    const employee = new Employee('Dave', 15)

    expect(employee.getId()).toBe(15);
});

test('get employee email', () => {
    const employee = new Employee('Dave', 15, 'dave@davesmail.com')

    expect(employee.getEmail()).toBe('dave@davesmail.com');
});

test('get employee role', () => {
    const employee = new Employee()

    expect(employee.getRole()).toBe('Employee');
});