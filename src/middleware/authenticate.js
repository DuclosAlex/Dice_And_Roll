const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {

    console.log(req.headers)
    const token = req.headers.authorization?.split(' ')[1];
    console.log("verify token", token);

    if(!token) {
        return res.status(401).json({error: "Authentification invalide"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch(error) {
        console.log(error)
    }
}

module.exports = authenticate;