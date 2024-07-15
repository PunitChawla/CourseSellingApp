

const jwt = require("jsonwebtoken");
// const secret = require("../index")
const {JWT_SECRET} = require("../config");
function adminMiddleware(req,res,next)
{
    // jwt varification 
    
    const token = req.headers.authorization;
    const word = token.split(" ")
    const jwtToken = word[1];
    try{
        const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
        if(decodedValue.username)
        {
            next();
        }
        else{
            msg : "invalid username of password"
        }
    }
    catch(e)
    {
        msg : "invalid  input"  
    }

}

module.exports = adminMiddleware;