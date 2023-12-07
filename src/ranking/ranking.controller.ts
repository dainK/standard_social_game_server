import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { RankingService } from './ranking.service';
import { Ranking as RankingModel } from '@prisma/client';

@Controller('ranking')
export class RankingController {
  constructor(
    private readonly rankingService: RankingService,
  ) {}

  @Get('')
  async getPostById(): Promise<RankingModel[]> {
    return this.rankingService.getRanking();
  }

  @Post('score')
  async createScore(
    @Body() postData: { score: number; name: string; },
  ): Promise<RankingModel> {
    const { score, name } = postData;
    return this.rankingService.createScore({
      name,
      score
    });
  }

}