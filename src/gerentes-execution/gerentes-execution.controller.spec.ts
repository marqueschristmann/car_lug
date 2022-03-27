import { Test, TestingModule } from '@nestjs/testing';
import { GerentesExecutionController } from './gerentes-execution.controller';

describe('GerentesExecutionController', () => {
  let controller: GerentesExecutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerentesExecutionController],
    }).compile();

    controller = module.get<GerentesExecutionController>(
      GerentesExecutionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
