import { Config } from './ConfigInterface';

let env = process.env.NODE_ENV || 'development';

export let settings: Config = {
  name: 'easy-pizza-api',
  version: '1.0.0',
  port: 8080,
  env: 'dev'
};

if (env === 'production') {
  settings.env = 'prod';
}