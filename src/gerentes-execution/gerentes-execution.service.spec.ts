import { Test, TestingModule } from '@nestjs/testing';
import { GerentesExecutionService } from './gerentes-execution.service';

describe('GerentesExecutionService', () => {
  let service: GerentesExecutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerentesExecutionService],
    }).compile();

    service = module.get<GerentesExecutionService>(GerentesExecutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
