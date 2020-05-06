let constellation = "Andromeda"
let pos = 0
let constellationLength = constellation.length

while(pos < constellationLength) {
    if(constellation[pos] == "a" || constellation[pos] == "A"){
        console.log(pos)
    }
    pos += 1
}