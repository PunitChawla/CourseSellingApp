const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");


function userMiddleware(req,res,next)
{
    const token = req.body.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    try {
        const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
        if(decodedValue.username)
        {
            next();
        }
        else{
            msg : "invalid username or password "
        }
    } catch (error) {
        msg : "invalid input"
    }
}