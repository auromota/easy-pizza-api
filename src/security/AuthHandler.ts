import * as restify from 'restify';
import * as jwt from 'jsonwebtoken';
import { ErrorUtils } from '../error/ErrorUtils';
import { EasyPizzaErrorType } from '../error/EasyPizzaErrorType';
import * as mongoose from 'mongoose';

export class AuthHandler {

	public static isAuthorized(req: restify.Request, res: restify.Response, next: restify.Next) {
		let token = AuthHandler.getToken(req);
		if (token) {
			jwt.verify(token, process.env.JWT_PASS, (err: any, decoded: any) => {
				if (err) {
					res.send(ErrorUtils.error(EasyPizzaErrorType.InvalidToken));
					next(false);
				}
				return next();
			});
		} else {
			res.send(ErrorUtils.error(EasyPizzaErrorType.NoTokenProvided));
			next(false);
		}
	}

	private static getToken(req: restify.Request) {
		return req.headers['access-token'];
	}

}