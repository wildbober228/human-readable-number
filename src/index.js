
function toReadableHelp (number) {
    let simpleNumberArr = ["zero", "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten"
                            , "eleven" , "twelve" , "thirteen" , "fourteen" , "fifteen" , "sixteen" , "seventeen" 
                            , "eighteen" , "nineteen" , "twenty" , ]
    let dozensNumberArr = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    
    if (number <= 20) {
        return simpleNumberArr[number]
    } 
    if (number <= 99) {
        let firstNum = parseInt((number+'')[0])
        let secondNum = parseInt((number+'')[1])
        if (secondNum === 0) {
            return dozensNumberArr[firstNum]
        } else {
            return dozensNumberArr[firstNum] + " " + simpleNumberArr[secondNum]
        }
    }   
} 

module.exports = function toReadable (number) {
    let simpleNumberArr = ["zero", "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine"]
    let hundred = "hundred"

    if (number <= 99) {
        return toReadableHelp(number)
    }

    if (number <= 999) {
        let firstNum = parseInt((number+'')[0])
        let secondNum = parseInt((number+'')[1])
        let thirdNum = parseInt((number+'')[2])
        let dozenNumber = parseInt((number+'')[1] + (number+'')[2])
        if ((secondNum + thirdNum) === 0) {
            return simpleNumberArr[firstNum] + " " + hundred
        } else {
            return simpleNumberArr[firstNum] + " " + hundred + " " + toReadableHelp(dozenNumber)
        }
    }
}
