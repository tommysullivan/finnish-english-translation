var Strings = require('../../strings');
var Collection = require('collections').Collection;
var Predicates = require('../../predicates');

describe('Strings', function() {
    describe('isVowel', function() {
        var string = Strings(Collection(['a','e']), Predicates());
        describe('when vowels are a and e', function() {
            describe('and we check if a is a vowel', function() {
                it('returns true', function() {
                    expect(string.isVowel('a')).toBeTruthy();
                });
            }); 
            describe('and we check if e is a vowel', function() {
                it('returns true', function() {
                    expect(string.isVowel('e')).toBeTruthy();
                });
            }); 
            describe('and we check if f is a vowel', function() {
                it('returns true', function() {
                    expect(string.isVowel('f')).toBeFalsy();
                });
            }); 
        });
    });
    describe('charFromEnd', function() {
        var string = Strings();
        describe('when we ask for 3rd from end of abcdef', function() {
            it('is d', function() {
                expect(string.charFromEnd('abcdef', 3)).toEqual('d');
            });
        });
    });
});