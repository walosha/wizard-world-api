import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WizardsModule } from './wizards/wizards.module';

@Module({
  imports: [WizardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
