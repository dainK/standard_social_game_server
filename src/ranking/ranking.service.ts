import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Ranking, Prisma } from '@prisma/client';

@Injectable()
export class RankingService {
  constructor(private prisma: PrismaService) {}

  
  // async ranking(
  //   rankingWhereUniqueInput: Prisma.RankingWhereUniqueInput,
  // ): Promise<Ranking | null> {
  //   return this.prisma.ranking.findUnique({
  //     where: rankingWhereUniqueInput,
  //   });
  // }
  async createScore(data: Prisma.RankingCreateInput): Promise<Ranking> {
    return this.prisma.ranking.create({
      data,
    });
  }

  async getRanking(): Promise<Ranking[]> {
    return this.prisma.ranking.findMany({
      select: {
        id: true,
        name: true,
        score: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        score: 'desc', // 'desc'는 내림차순, 'asc'는 오름차순
      },
    });
  }
}