import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RankingModule } from './ranking/ranking.module'; // assuming RankingModule is in the 'ranking' folder

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RankingController } from './ranking/ranking.controller';
import { RankingService } from './ranking/ranking.service';


@Module({
  imports: [PrismaModule, RankingModule],
  controllers: [AppController,RankingController],
  providers: [AppService,RankingService],
})
export class AppModule {}
