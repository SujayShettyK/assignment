import { Test, TestingModule } from '@nestjs/testing';
import { AgifyService } from './agify.service';

describe('AgifyService', () => {
  let service: AgifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgifyService],
    }).compile();

    service = module.get<AgifyService>(AgifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
