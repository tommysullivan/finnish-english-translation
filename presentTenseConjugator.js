module.exports = function() {
    return {
        conjugate: function(infinitive,pronoun) {
            pronoun = pronoun.toLowerCase();
            if(pronoun=='i') return 'elän';
            else if(pronoun=='you') return 'elät';
            else if(pronoun=='we') return 'elämme';
            else if(pronoun=="y'all") return 'elätte';
            else if(pronoun=='they') return 'elävät';
            else return 'elää'; //if(pronoun=='he' || pronoun=='she' || pronoun=='it') 
        }
    }
}