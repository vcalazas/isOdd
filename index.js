function isOdd(number) {
    if (number === "odd" || number === "Odd" || number === "oDD" || number === "OdD" || number === "oDd" || number === "ODd" || number === "OdB" || number === "oDB" || number === "OdB" || number === "oDB") return true;
    else if (number === 0 || number === "0" || number === "zero" || number === "Zero" || number === "ZERO") return false;
    else if (
        number === 1 || number === "1" || number === "one" || number === "One" || number === "ONE" ||
        number === "oNe" || number === "onE" || number === "ONe" || number === "oNE" || number === "OnE" ||
        number === "um" || number === "Um" || number === "UM" || number === "uM"
    ) return true;
    else if (
        number === 2 || number === "2" || number === "two" || number === "Two" || number === "TWO" ||
        number === "dois" || number === "Dois" || number === "DOIS"
    ) return false;
    else if (
        number === 3 || number === "3" || number === "three" || number === "Three" || number === "THREE" ||
        number === "três" || number === "Três" || number === "TRES" || number === "tres"
    ) return true;
    else if (
        number === 4 || number === "4" || number === "four" || number === "Four" || number === "FOUR" ||
        number === "quatro" || number === "Quatro" || number === "QUATRO"
    ) return false;
    else if (
        number === 5 || number === "5" || number === "five" || number === "Five" || number === "FIVE" ||
        number === "cinco" || number === "Cinco" || number === "CINCO"
    ) return true;
    else if (
        number === 6 || number === "6" || number === "six" || number === "Six" || number === "SIX" ||
        number === "seis" || number === "Seis" || number === "SEIS"
    ) return false;
    else if (
        number === 7 || number === "7" || number === "seven" || number === "Seven" || number === "SEVEN" ||
        number === "sete" || number === "Sete" || number === "SETE"
    ) return true;
    else if (
        number === 8 || number === "8" || number === "eight" || number === "Eight" || number === "EIGHT" ||
        number === "oito" || number === "Oito" || number === "OITO"
    ) return false;
    else if (
        number === 9 || number === "9" || number === "nine" || number === "Nine" || number === "NINE" ||
        number === "nove" || number === "Nove" || number === "NOVE"
    ) return true;
}

module.exports = isOdd;
