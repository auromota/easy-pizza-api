import jwt from 'jsonwebtoken';
import ErrorUtils from '../error/errorUtils';
import mongoose from 'mongoose';

export default class AuthHandler {

	static authorizeRequest(req, res, next) {
		let token = AuthHandler.getToken(req.headers);
		if (token) {
			let decoded = AuthHandler.decodeToken(token);
			if (decoded) {
				req.user = decoded;
				return next();
			}
			return next(ErrorUtils.InvalidToken);
		}
		return next(ErrorUtils.NoTokenProvided);
	}

	/**
	 * Validates a token using JWT.
	 * 
	 * @return decoded payload
	 */
	static decodeToken(token) {
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