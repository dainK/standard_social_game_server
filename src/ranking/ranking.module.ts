import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'; // assuming the path is correct
import { RankingService } from './ranking.service';
import { RankingController } from './ranking.controller';

@Module({
  imports: [PrismaModule],
  providers: [RankingService],
  controllers: [RankingController],
})
export class RankingModule {}