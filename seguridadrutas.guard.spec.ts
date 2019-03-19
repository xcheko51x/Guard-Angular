import { TestBed, async, inject } from '@angular/core/testing';

import { SeguridadrutasGuard } from './seguridadrutas.guard';

describe('SeguridadrutasGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeguridadrutasGuard]
    });
  });

  it('should ...', inject([SeguridadrutasGuard], (guard: SeguridadrutasGuard) => {
    expect(guard).toBeTruthy();
  }));
});
