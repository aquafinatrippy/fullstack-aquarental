const lib = require('./lib')

describe('registerUser', () => {
    it('should be number', () => {
        const result = lib.number(5)
        expect(result).toBe(5)
    })
    it('Should be greet message', () => {
        const result = lib.greet('tanel')
        expect(result).toBe('Hello tanel')
    })
})