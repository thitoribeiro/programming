let distanceInLy = prompt("Digite a distancia em anos luz")

let chosenOption = prompt("Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade Astronomica (AU)" +
                          "\n3. Quilometros (km)\n\n(Digite o numero da opcao desejada)")

let chosenUnity
let convertedDistance

switch(chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLy * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronomica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilometros"
        convertedDistance = distanceInLY * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade nao identificada"
        convertedDistance = "Conversao fora do escopo"
}

alert("Distancia em Anos-luz: " + distanceInLY + ": " + convertedDistance)