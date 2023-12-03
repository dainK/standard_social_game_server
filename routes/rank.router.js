import express from 'express';
import { prisma } from '../utils/prisma/index.js';
const router = express.Router();

// 스코어 등록
router.post('/ranking', async (req, res, next) => {
  const { name, score } = req.body;
  const rank = await prisma.ranking.create({
    data: {
      name : "GUEST",
      score : score
    },
  });
  return res.status(201).json({ data: rank });

  // // 랭킹 반환
  // const ranking = await prisma.ranking.findMany({
  //   select: {
  //     rankId: true,
  //     name: true,
  //     score: true,
  //     createdAt: true,
  //     updatedAt: true,
  //   },
  //   orderBy: {
  //     score: 'desc', // 'desc'는 내림차순, 'asc'는 오름차순
  //   },
  // });

  // // 찾은 랭킹에서 새로 추가한 랭크의 인덱스(순위)를 찾습니다.
  // const newIndex = ranking.findIndex(item => item.rankId === rank.rankId);

  // // rank 배열에 인덱스 추가
  // const rankedWithIndex = ranking.map((item, index) => ({ ...item, rank: index + 1 }));
  
  // // 새로 추가한 랭크에 대한 정보를 출력합니다.
  // console.log(rankedWithIndex[newIndex]);
});

/** 랭킹 목록 조회 API **/
router.get('/ranking', async (req, res, next) => {
  const rank = await prisma.ranking.findMany({
    select: {
      name: true,
      score: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      score: 'desc', // 'desc'는 내림차순, 'asc'는 오름차순
    },
  });
  // rank 배열에 인덱스 추가
  const rankedWithIndex = rank.map((item, index) => ({ ...item, rank: index + 1 }));

  // console.log(rankedWithIndex);

  return res.status(200).json({ data: rankedWithIndex });
});

export default router;