import express, { Request, Response } from 'express';
import router from './routes';

const app = express();

app.get('/welcome', (req: Request, res: Response) => {
  res.send('welcome!');
});
app.use('/api', router); //추가해 주세요

export default app;