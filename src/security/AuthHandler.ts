import * as restify from 'restify';
import * as jwt from 'jsonwebtoken';
import { ErrorUtils } from '../error/ErrorUtils';
import { EasyPizzaErrorType } from '../error/EasyPizzaErrorType';
import * as mongoose from 'mongoose';

export class AuthHandler {

	public static authorizeRequest(req: restify.Request, res: restify.Response, next: restify.Next) {
		let token = AuthHandler.getToken(req.headers);
		if (token) {
			if (AuthHandler.isTokenValid(token)) {
				return next();
			}
			res.send(ErrorUtils.error(EasyPizzaErrorType.InvalidToken));
			next(false);
		} else {
			res.send(ErrorUtils.error(EasyPizzaErrorType.NoTokenProvided));
			next(false);
		}
	}

	/**
	 * Validates a token using JWT.
	 * 
	 * @return true if token is valid
	 */
	public static isTokenValid(token: string): boolean {
		return jwt.verify(token, process.env.JWT_PASS);
	}

	/**
	 * Gets the token from the headers object of a request.
	 * 
	 * @return a token
	 */
	public static getToken(headers: any): string {
		return headers['token'];
	}

}