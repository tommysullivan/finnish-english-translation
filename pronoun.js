module.exports = function(pronounString, pluralPronounCollection, firstPersonPronounCollection, secondPersonPronounCollection) {
    return {
        isPlural: function() {
            return pluralPronounCollection.contains(pronounString.toLowerCase());
        },
        isSingular: function() {
            return !this.isPlural();
        },
        getNoWord: function() {
            if(this.isSingular()) {
                if(this.isFirstPerson()) return 'en';
                if(this.isSecondPerson()) return 'et';
                return 'ei';
            }
            else {
                if(this.isFirstPerson()) return 'emme';
                if(this.isSecondPerson()) return 'ette';
                return 'eivät';
            }
        },
        isFirstPerson: function() {
            return firstPersonPronounCollection.contains(pronounString.toLowerCase());
        },
        isSecondPerson: function() {
            return secondPersonPronounCollection.contains(pronounString.toLowerCase());
        },
        isThirdPerson: function() {
            return !(this.isFirstPerson || this.isSecondPerson());
        }
    }
}