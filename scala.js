function combinations(listOfCharCountPairs) {
    listOfCharCountPairs = listOfCharCountPairs.slice();
    if(listOfCharCountPairs.length==0) return [[]];
    else {
        var currentPair = listOfCharCountPairs.pop();
        var previousList = combinations(listOfCharCountPairs);
        
        var smallerPairsForLetter = []
        for(var c=1; c<=currentPair[1]; c++) {
            smallerPairsForLetter.push([currentPair[0], c]);
        }
        
        var result = previousList.slice(); 
        smallerPairsForLetter.forEach(function(smallerPairForLetter) {
            previousList.forEach(function(pairsInPreviousList) {
                pairsInPreviousList = pairsInPreviousList.slice();
                pairsInPreviousList.push(smallerPairForLetter);
                result.push(pairsInPreviousList);
            });
        });
        
        return result;
    }
}
console.log(combinations([['a', 1], ['b', 2], ['c', 2]]));

/*
*    List(
   *      List(),
   *      List(('a', 1)),
   *      List(('a', 2)),
   *      List(('b', 1)),
   *      List(('a', 1), ('b', 1)),
   *      List(('a', 2), ('b', 1)),
   *      List(('b', 2)),
   *      List(('a', 1), ('b', 2)),
   *      List(('a', 2), ('b', 2))
   *    )
   */