let Currency = function (currencyExchange) {
    this.currencyExchange = currencyExchange;
}
Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
}

Currency.prototype.euroToPLN = function(euro) {
    return this.roundTwoDecimals(euro * this.currencyExchange);
}
Currency.prototype.usdToPLN = function(usd) {
    return this.roundTwoDecimals(usd * this.currencyExchange);
}
Currency.prototype.gbpToPLN = function(gbp) {
    return this.roundTwoDecimals(gbp * this.currencyExchange);
}
Currency.prototype.chfToPLN = function(chf) {
    return this.roundTwoDecimals(chf * this.currencyExchange);
}
Currency.prototype.rubToPLN = function(rub) {
    return this.roundTwoDecimals(rub * this.currencyExchange);
}

module.exports = exports = Currency;