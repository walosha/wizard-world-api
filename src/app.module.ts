import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WizardsModule } from './wizards/wizards.module';
import { ElixirsModule } from './elixirs/elixirs.module';

@Module({
  imports: [WizardsModule, ElixirsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
