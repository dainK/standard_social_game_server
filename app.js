import express from 'express';
import rankRouter from './routes/rank.router.js';
import cors from 'cors';

const app = express();
const PORT = 3017;

app.use(express.json());
// // 특정 출처만 허용하도록 CORS 미들웨어 설정
// const corsOptions = {
//   origin: 'http://localhost:5173', // 원하는 출처를 여기에 지정
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

app.use(cors());
app.use('/api', [rankRouter]);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});