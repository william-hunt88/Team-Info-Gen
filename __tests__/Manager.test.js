const Manager = require('../lib/Manager.js')

test('Creates new manager', () => {
    const manager = new Manager('Dave', 537, 'dave@davesmail.com', 15)

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(537);
    expect(manager.email).toBe('dave@davesmail.com');
    expect(manager.officeNumber).toBe(15);
});

test('get Managers role', () => {
    const manager = new Manager;

    expect(manager.getRole()).toBe('Manager')

})