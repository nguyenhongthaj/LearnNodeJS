var Cart = require('../models/sessions.model')

module.exports.addToCart = async function(req, res, next){
    var productId = await req.params.productId;
    var sessionId = await req.signedCookies.sessionId;
    var userId = await req.signedCookies.userId;
    if(!sessionId){
        res.redirect('/products');
        return;
    }
    if(!userId){
        await Cart.updateOne({idCard : sessionId},{$push:{productId:productId}});
    }
    else{
        await Cart.updateOne({idCard : sessionId},{$push:{productId:productId},$set:{userId:userId}});
    }

    
    res.redirect('/products');

}
module.exports.countCart = async function(req, res, next){
    var userId = await req.signedCookies.userId;
    var count = await Cart.find({
        userId: userId[0]
    })
    console.log(count);
    if(!userId){

    }
}