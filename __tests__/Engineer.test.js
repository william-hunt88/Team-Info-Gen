const Engineer = require('../lib/Engineer.js')

test('Creates new engineer', () => {
    const engineer = new Engineer('Dave', 537, 'dave@davesmail.com', 'davesgithub')

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe(537);
    expect(engineer.email).toBe('dave@davesmail.com');
    expect(engineer.github).toBe('davesgithub');
});

test('get Engineers role', () => {
    const engineer = new Engineer()

    expect(engineer.getRole()).toBe('Engineer');
});

test('get Engineers github username', () => {
    const engineer = new Engineer('Dave', 537, 'dave@davesmail.com', 'davesgithub')

    expect(engineer.github).toBe('davesgithub')

})


