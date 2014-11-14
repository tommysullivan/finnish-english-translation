module.exports = function(){
    return {
        conjugateNoWord: function (pronoun){
          switch(pronoun){
                case 'minä': return 'en';
                case 'sinä': return 'et';
                case 'me': return 'emme';
                case 'te': return 'ette';
                case 'he': return 'eivät';
                default: return 'ei';
            }  
        }
    }
}