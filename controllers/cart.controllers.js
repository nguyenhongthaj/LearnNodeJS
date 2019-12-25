module.exports.addToCart = function(req, res, next){
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
}