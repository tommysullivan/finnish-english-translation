var Character = require('../../character');
var Collection = require('collections').Collection;
var Predicates = require('../../predicates');

describe('Character', function() {
   describe('isVowel', function() {
        function createCharacter(charString) {
            return Character(charString, Collection(['a','e']), Predicates());
        }
        describe('when vowels are a and e', function() {
            describe('and we check if a is a vowel', function() {
                it('returns true', function() {
                    expect(createCharacter('a').isVowel()).toBeTruthy();
                });
            }); 
            describe('and we check if e is a vowel', function() {
                it('returns true', function() {
                    expect(createCharacter('a').isVowel()).toBeTruthy();
                });
            }); 
            describe('and we check if f is a vowel', function() {
                it('returns true', function() {
                    expect(createCharacter('f').isVowel()).toBeFalsy();
                });
            }); 
        });
    }); 
});