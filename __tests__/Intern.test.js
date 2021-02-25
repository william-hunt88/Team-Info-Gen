const Intern = require('../lib/Intern.js')

test('Creates new intern', () => {
    const intern = new Intern('Dave', 537, 'dave@davesmail.com', "MTSU")

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe(537);
    expect(intern.email).toBe('dave@davesmail.com');
    expect(intern.school).toBe("MTSU");

})

test('get Interns role', () => {
    const intern = new Intern()

    expect(intern.getRole()).toBe('Intern');
});

test('get Interns School', () => {
    const intern = new Intern('Dave', 537, 'dave@davesmail.com', "MTSU")

    expect(intern.school).toBe('MTSU')
})