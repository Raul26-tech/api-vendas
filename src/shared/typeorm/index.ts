import { DataSource } from 'typeorm';
import enviroment from '../../config/enviroment';

export const AppDatasource = new DataSource({
  type: 'postgres',
  database: enviroment.DB_DATABASE,
  port: enviroment.DB_PORT,
  host: enviroment.DB_HOST,
  username: enviroment.DB_USERNAME,
  password: enviroment.DB_PASSWORD,
  migrations: ['./src/shared/typeorm/migration/*.ts'],
});

export const connectDb = async () => {
  try {
    const dataSource = await AppDatasource.initialize();
    await dataSource.runMigrations();
    console.log('Migrations initialized with success');
    return dataSource;
  } catch (error) {
    console.log(error);
  }

  return null;
};
