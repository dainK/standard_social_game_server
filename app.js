import express from 'express';
import rankRouter from './routes/rank.router.js';

const app = express();
const PORT = 3017;

app.use(express.json());
app.use('/api', [rankRouter]);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});