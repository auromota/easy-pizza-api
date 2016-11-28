export namespace Connection {

    export function getConnectionString(): string {
        let username = process.env.MONGODB_USERNAME;
        let password = process.env.MONGODB_PASSWORD;
        let url = process.env.MONGODB_URL;
        let port = process.env.MONGODB_PORT;
        let db = process.env.MONGODB_DATABASE;
        return 'mongodb://' + username + ':' + password + '@' + url + ':' + port + '/' + db;
    }

}