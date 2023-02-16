import { Module } from '@nestjs/common';
import { ElixirsService } from './elixirs.service';
import { ElixirsController } from './elixirs.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ElixirsController],
  providers: [ElixirsService, PrismaService],
})
export class ElixirsModule {}
