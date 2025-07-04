import { Test, TestingModule } from '@nestjs/testing';
import { ClassInCourseService } from './class-in-course.service';

describe('ClassInCourseService', () => {
  let service: ClassInCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassInCourseService],
    }).compile();

    service = module.get<ClassInCourseService>(ClassInCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
