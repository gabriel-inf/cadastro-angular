import { TestBed } from '@angular/core/testing';

import { CursistaService } from './cursista.service';

describe('CursistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursistaService = TestBed.get(CursistaService);
    expect(service).toBeTruthy();
  });
});
