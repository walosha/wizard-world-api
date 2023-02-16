import { Test, TestingModule } from '@nestjs/testing';
import { ElixirsController } from './elixirs.controller';
import { ElixirsService } from './elixirs.service';

describe('ElixirController', () => {
  let controller: ElixirsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElixirsController],
      providers: [ElixirsService],
    }).compile();

    controller = module.get<ElixirsController>(ElixirsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
