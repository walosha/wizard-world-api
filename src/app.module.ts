import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WizardsModule } from './wizards/wizards.module';
import { ElixirsModule } from './elixirs/elixirs.module';
import { SpellsModule } from './spells/spells.module';

@Module({
  imports: [WizardsModule, ElixirsModule, SpellsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
