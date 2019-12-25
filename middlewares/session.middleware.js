var Sessions = require('../models/sessions.model')
module.exports = function(req, res, next){
    var sessionId = Math.random().toString(36).substring(7);
    //console.log(sessionId);
    if(!req.signedCookies.sessionId){
        res.cookie('sessionId', sessionId, { 
            signed: true
         });
        sessionSchema = new Sessions({
            id: sessionId
         });
        //sessionSchema.save();
        Sessions.create(sessionSchema);
    }   
    next();
}