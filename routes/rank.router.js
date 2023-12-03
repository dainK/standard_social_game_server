import express from 'express';
import { prisma } from '../utils/prisma/index.js';
const router = express.Router();

// 게시글 생성
router.post('/ranking', async (req, res, next) => {
  const { name, score } = req.body;
  const rank = await prisma.ranking.create({
    data: {
      name : "GUEST",
      score : score
    },
  });

  return res.status(201).json({ data: rank });
});

/** 게시글 전체 조회 API **/
router.get('/ranking', async (req, res, next) => {
  const rank = await prisma.ranking.findMany({
    select: {
      name: true,
      score: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return res.status(200).json({ data: rank });
});

export default router;