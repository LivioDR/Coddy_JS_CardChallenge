function printCard(numArr, symbolArr){
    let arrayOfCards = []
    for(let i=0; i<numArr.length; i++){
        arrayOfCards.push(getCard(numArr[i],symbolArr[i]))
    }
    let cardsToPrint = []
    for(let i=0; i<9; i++){
        let rowArray = []
        for(let j=0; j<arrayOfCards.length; j++){
            rowArray.push(arrayOfCards[j][i])
        }
        cardsToPrint.push(rowArray.join(" "))
    }
    for(let i=0; i<cardsToPrint.length; i++){
        console.log(cardsToPrint[i])
    }
}


function getCard(num, symbol) {
    // Write code here
    let centerSymbol = " "
    let numberTop = "  "
    let numberBottom = "  "

    const validSymbols = {
        'club':'♣',
        'diamond':'♦',
        'heart':'♥',
        'spade':'♠'
    }

    if(Object.keys(validSymbols).includes(symbol)){
        centerSymbol = validSymbols[symbol]
    }

    if(num < 1 || num > 13){
        numberTop = "  "
        numberBottom = "  "
    }
    else {
        numberTop = num == 1 ? "A " : num == 10 ? "10" : num == 11 ? "J " : num == 12 ? "Q " : num == 13 ? "K " : `${num} `
        numberBottom = num == 1 ? " A" : num == 10 ? "10" : num == 11 ? " J" : num == 12 ? " Q" : num == 13 ? " K" : ` ${num}`
    }

    let firstRow = "╔═════════╗"
    let secondRow = `║ ${numberTop}      ║`
    let centerRow = `║    ${centerSymbol}    ║`
    let otherRows = "║         ║"
    let secToLast = `║      ${numberBottom} ║`
    let lastRow = "╚═════════╝"

    let cardArray = []


    // START PRINTING
    cardArray.push(firstRow)
    cardArray.push(secondRow)
    for(let i=0; i<5; i++){
        if(i == 2){
            cardArray.push(centerRow)
        }
        else {
            cardArray.push(otherRows)
        }
    }
    cardArray.push(secToLast)
    cardArray.push(lastRow)

    return cardArray
}

printCard([10,13,8],['heart','spade','club'])