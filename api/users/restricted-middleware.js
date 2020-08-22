const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// const users = require('./users-model.js');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {
			if (err) {
				res.status(401).json({ message: 'Not Verified' });
			} else {
				req.decodeToken = decodeToken;
				next();
			}
		});
	} else {
		res.status(400).json({ message: 'No Token Provided' });
	}
};
