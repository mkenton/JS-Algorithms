/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    
    var max = 0
    
    for (sentence of sentences) {
            let words = sentence.split(' ').length
            if (words > max) {max = words}
    }
        return max
    };