import { AppFactory } from './app/AppFactory';
import dotenv from 'dotenv';
dotenv.config();

const app = AppFactory.getInstance();

app.configure();

const PORT = process.env.PORT || 3000;
app.start(PORT);
