import { TestBed } from '@angular/core/testing';

import { TestLibPrjService } from './test-lib-prj.service';

describe('TestLibPrjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLibPrjService = TestBed.get(TestLibPrjService);
    expect(service).toBeTruthy();
  });
});
