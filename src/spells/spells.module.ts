import { Module } from '@nestjs/common';
import { SpellController } from './spells.controller';
import { SpellsService } from './spells.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SpellController],
  providers: [SpellsService, PrismaService],
})
export class SpellsModule {}
