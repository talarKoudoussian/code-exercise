import Startup from './startup'

test('Startup.displayMessage', () => {
    expect(Startup.displayMessage()).toBe('Welcome to my page')
})
