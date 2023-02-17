import { Test, TestingModule } from '@nestjs/testing';
import { SpellController } from './spells.controller';
import { SpellsService } from './spells.service';

describe('ElixirController', () => {
  let controller: SpellController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpellController],
      providers: [SpellsService],
    }).compile();

    controller = module.get<SpellController>(SpellController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
