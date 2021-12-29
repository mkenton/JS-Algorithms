// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) { 
    const arrLength = array.length
    const lastChunkSize = arrLength % size
    const numFullChunks = (arrLength - lastChunkSize) / size
    
    const result = []
    let index = 0
    for (let i = 0; i < numFullChunks; i++) {
        let chunk = []
        let j = 0
        while (j < size) {
            chunk[j] = array[index]
            index = index + 1
            j = j + 1
        }
        result[i] = chunk
    }
    if (lastChunkSize) {
    const lastChunk = array.slice(-lastChunkSize);
    result.push(lastChunk);
    }
    return result
}
module.exports = chunk;
