import { Config } from './ConfigInterface';
import { Environment } from './Environment';

let env = process.env.NODE_ENV || 'development';

export let settings: Config = {
  name: 'easy-pizza-api',
  version: '1.0.0',
  port: 8080,
  env: Environment.Development
};

if (env === 'production') {
  settings.env = Environment.Production;
}