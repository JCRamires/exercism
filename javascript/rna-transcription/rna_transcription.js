var DnaTranscriber = function() {}

DnaTranscriber.prototype.dnaPairs = {
    c: 'G',
    g: 'C',
    a: 'U',
    t: 'A'
}

DnaTranscriber.prototype.rnaPairs = {
    c: 'G',
    g: 'C',
    u: 'A',
    a: 'T'
}

DnaTranscriber.prototype.toRna = function(strand) {
    var complement = ''
    for (var i = 0; i < strand.length; i++) {
        complement += this.dnaPairs[strand[i].toLowerCase()]
    }
    return complement
}

DnaTranscriber.prototype.toDna = function(strand) {
    var complement = ''
    for (var i = 0; i < strand.length; i++) {
        complement += this.rnaPairs[strand[i].toLowerCase()]
    }
    return complement
}

module.exports = DnaTranscriber
