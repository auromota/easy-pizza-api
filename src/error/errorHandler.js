export default function errorHandler(err, req, res, next) {
    if (err.statusCode) {
        res.status(err.statusCode).json(err);
    } else {
        res.status(500).json(err);
    }
}