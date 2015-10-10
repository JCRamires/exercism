var compute = function(firstStrand, secondStrand) {
    if (firstStrand.length !== secondStrand.length) {
        throw new Error('DNA strands must be of equal length.')
    }

    var hamming = 0
    for (var i = 0; i < firstStrand.length; i++) {
        if (firstStrand[i] !== secondStrand[i]) {
            hamming++
        }
    }

    return hamming
}

module.exports = compute
