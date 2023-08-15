import dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config({
  path: '.env',
});

export default {
  DB_TYPE: env.get('DB_TYPE').required().asString(),
  DB_PORT: env.get('DB_PORT').required().asInt(),
  DB_HOST: env.get('DB_HOST').required().asString(),
  DB_DATABASE: env.get('DB_DATABASE').required().asString(),
  DB_USERNAME: env.get('DB_USERNAME').required().asString(),
  DB_PASSWORD: env.get('DB_PASSWORD').required().asString(),
};
