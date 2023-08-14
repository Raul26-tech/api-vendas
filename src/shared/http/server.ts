import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import AppError from '../errors/appError';

const app = express();
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('\n\n\n   WELCOME, SERVER STARTED ON PORT 3333');
});
