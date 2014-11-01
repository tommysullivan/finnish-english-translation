var PresentTenseConjugator = require('../../presentTenseConjugator');

describe('PresentTenseConjugator', function() {
    var presentTenseConjugator;
    beforeEach(function() {
        presentTenseConjugator = PresentTenseConjugator();
    });
    describe('conjugate(infinitive, pronoun)', function() {
        describe('when infinitive is elää', function() {
            //TODO: Maybe we should test different capitalizations!
            function expectConjugation(pronoun, expected) {
                expect(presentTenseConjugator.conjugate('elää', pronoun)).toBe(expected);
            }
            describe('and pronoun is I', function() {
                it('should be elän', function() {
                    expectConjugation('I', 'elän');
                }); 
            }); 
            describe('and pronoun is you', function() {
                it('should be elät', function() {
                    expectConjugation('you', 'elät');
                }); 
            }); 
            describe('and pronoun is he, she, or it', function() {
                it('should be elää', function() {
                    expectConjugation('he', 'elää');
                    expectConjugation('she', 'elää');
                    expectConjugation('it', 'elää');
                }); 
            }); 
            describe('and pronoun is we', function() {
                it('should be elämme', function() {
                    expectConjugation('we', 'elämme');
                }); 
            }); 
            describe("and pronoun is y'all", function() {
                it('should be elätte', function() {
                    expectConjugation("y'all", 'elätte');
                }); 
            }); 
            describe("and pronoun is they", function() {
                it('should be elävät', function() {
                    expectConjugation('they', 'elävät');
                }); 
            }); 
        });
    });
});