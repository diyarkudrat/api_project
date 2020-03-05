const jwt = require('jsonwebtoken');

module.exports = {
    validateToken: (req, res, next) => {
        const authorizationHeader = req.headers.authorization;
        let result;
        if (authorizationHeader) {
            // Bearer <token>
            const token = req.headers.authorization.split(' ')[1];
            const options = {
                expiresIn: '90d',
                issuer: 'https://scotch.io'
            };
            try {
                // verify if token has not expired and has been issued by us
                result = jwt.verify(token, process.env.JWT_SECRET, options);

                // passing back the decoded token to the request object
                req.decoded = result;

                next();
            } catch (err) {
                throw new Error(err);
            }
        } else {
            result = {
                error: `Authentication Error. Token Required`,
                status: 401
            };
            res.status(401).send(result);
        }
    }
};