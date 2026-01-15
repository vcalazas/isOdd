function isOdd(number) {
    if (number === "odd" || number === "Odd" || number === "oDD" || number === "OdD" || number === "oDd" || number === "ODd" || number === "OdB" || number === "oDB" || number === "OdB" || number === "oDB") return true;
    else if (number === 0 || number === "0" || number === "zero" || number === "Zero" || number === "ZERO") return false;
    else if (
    number === 1 || number === "1" ||number === "one" || number === "One" || number === "ONE" ||number === "oNe" || number === "onE" || number === "ONe" || number === "oNE" || number === "OnE" ||number === "um" || number === "Um" || number === "UM" ||
    number === "uM"
) return true;
}
module.exports = isOdd;
