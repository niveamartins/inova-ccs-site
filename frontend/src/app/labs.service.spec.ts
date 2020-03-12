import { TestBed } from '@angular/core/testing';

import { LabsService } from './labs.service';

describe('LabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabsService = TestBed.get(LabsService);
    expect(service).toBeTruthy();
  });
});
