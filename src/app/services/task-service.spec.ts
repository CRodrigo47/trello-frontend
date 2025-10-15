import { TestBed } from '@angular/core/testing';

import { TaskServiceç } from './task-service';

describe('TaskServiceç', () => {
  let service: TaskServiceç;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskServiceç);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
