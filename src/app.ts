import express, { Application } from 'express';
import morgan from 'morgan';

import AuthController from './routes/auth'

const app: Application = express();

// settings
app.set('port', 3000 || process.env.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', AuthController);

export default app;
