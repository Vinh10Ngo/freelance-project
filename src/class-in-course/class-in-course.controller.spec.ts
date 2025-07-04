import { Test, TestingModule } from '@nestjs/testing';
import { ClassInCourseController } from './class-in-course.controller';
import { ClassInCourseService } from './class-in-course.service';

describe('ClassInCourseController', () => {
  let controller: ClassInCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassInCourseController],
      providers: [ClassInCourseService],
    }).compile();

    controller = module.get<ClassInCourseController>(ClassInCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
