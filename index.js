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
}

module.exports = isOdd;
