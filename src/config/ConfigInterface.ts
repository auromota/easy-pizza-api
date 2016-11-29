import { Environment } from './Environment';

export interface Config {
    name: string;
    port: number;
    env: Environment;
    version: string;
}
