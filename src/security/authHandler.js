import jwt from 'jsonwebtoken';
import ErrorUtils from '../error/errorUtils';
import mongoose from 'mongoose';

export default class AuthHandler {

	static authorizeRequest(req, res, next) {
		let token = AuthHandler.getToken(req.headers);
		if (token) {
			if (AuthHandler.isTokenValid(token)) {
				return next();
			}
			res.send(ErrorUtils.InvalidToken);
			next(false);
		} else {
			res.send(ErrorUtils.NoTokenProvided);
			next(false);
		}
	}

	/**
	 * Validates a token using JWT.
	 * 
	 * @return true if token is valid
	 */
	static isTokenValid(token) {
		return jwt.verify(token, process.env.JWT_PASS);
	}

	/**
	 * Gets the token from the headers object of a request.
	 * 
	 * @return a token
	 */
	static getToken(headers) {
		return headers['token'];
	}

}