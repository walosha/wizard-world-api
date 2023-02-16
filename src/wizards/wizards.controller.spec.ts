import { Test, TestingModule } from '@nestjs/testing';
import { WizardsController } from './wizards.controller';
import { WizardsService } from './wizards.service';

describe('WizardsController', () => {
  let controller: WizardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WizardsController],
      providers: [WizardsService],
    }).compile();

    controller = module.get<WizardsController>(WizardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
