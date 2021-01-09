const euroPLN = 4.51;
const usdPLN = 3.69;
const gbpPLN = 5.01;
const chfPLN = 4.17;
const rubPLN = 0.050;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.euroToPLN = function(euro) {
    return roundTwoDecimals(euro * euroPLN);
}
exports.usdToPLN = function(usd) {
    return roundTwoDecimals(usd * usdPLN);
}
exports.gbpToPLN = function(gbp) {
    return roundTwoDecimals(gbp * gbpPLN);
}
exports.chfToPLN = function(chf) {
    return roundTwoDecimals(chf * chfPLN);
}
exports.rubToPLN = function(rub) {
    return roundTwoDecimals(rub * rubPLN);
}