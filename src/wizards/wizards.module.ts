import { Module } from '@nestjs/common';
import { WizardsService } from './wizards.service';
import { WizardsController } from './wizards.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [WizardsController],
  providers: [WizardsService, PrismaService],
})
export class WizardsModule {}
