export default function errorHandler(err, req, res, next) {
    res.status(err.statusCode).json(err);
}