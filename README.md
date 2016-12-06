# About this
The API is being developed in NodeJS with Restify and MongoDB.

## How to run
After downloading or cloning the repository, you must install its dependencies:

```bash
npm install
```

Then you must set some environment variables:

| Variable | Description |
|:-:|---|
| MONGODB_USERNAME | username of your mongoDB instance |
| MONGODB_PASSWORD | password of your mongoDB instance |
| MONGODB_URL | url to access your mongoDB instance |
| MONGODB_PORT | port to access your mongoDB instance|
| MONGODB_DATABASE | name of your mongoDB instance|
| JWT_PASS | secret password to be used by JWT |

To make it easier, you can just create a file named `.env` in the root of the project and add the attributes. [Dotenv](https://github.com/motdotla/dotenv) will take care of that:

```
JWT_PASS = pass
MONGODB_USERNAME = username
MONGODB_PASSWORD = password
MONGODB_URL = localhost
MONGODB_PORT = 123
MONGODB_DATABASE = database
```

Now we are ready to go! 

### Available commands:

To compile and run:
```bash
npm start
```
To compile and run watching for modifications:
```bash
npm run dev
```
To test it:
```bash
npm test
```
To test it watching for modifications:
```bash
npm test:auto
```

## Contributors
Auro Mota <auro@blueorc.com>

## License
The software is released under the MIT license.
