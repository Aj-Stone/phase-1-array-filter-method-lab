function findMatching(array,string){
    let matching = array.filter(name => name===string || name===string.toLowerCase())
    return matching
}

function fuzzyMatch(array, string){
    let sameLetter = array.filter(letter => letter[0]===string[0])
    return sameLetter
}

function matchName(drivers,string){
    let matchingName = drivers.filter(driver => driver.name === string)
    return matchingName
}