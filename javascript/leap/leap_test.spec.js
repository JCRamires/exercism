var isLeapYear = require('./leap')

describe('Leap year', function() {

    it('is not very common', function() {
        expect(isLeapYear(2015)).toBe(false)
    })

    it('is introduced every 4 years to adjust about a day', function() {
        expect(isLeapYear(2016)).toBe(true)
    })

    it('is skipped every 100 years to remove an extra day', function() {
        expect(isLeapYear(1900)).toBe(false)
    })

    it('is reintroduced every 400 years to adjust another day', function() {
        expect(isLeapYear(2000)).toBe(true)
    })

    describe('Additional example of a leap year that', function() {

        it('is not a leap year', function() {
            expect(isLeapYear(1978)).toBe(false)
        })

        it('is a common leap year', function() {
            expect(isLeapYear(1992)).toBe(true)
        })

        it('is skipped every 100 years', function() {
            expect(isLeapYear(2100)).toBe(false)
        })

        it('is reintroduced every 400 years', function() {
            expect(isLeapYear(2400)).toBe(true)
        })

    })

})
