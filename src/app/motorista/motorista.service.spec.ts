import { TestBed, inject } from '@angular/core/testing';

import { MotoristaService } from './motorista.service';

describe('MotoristaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotoristaService]
    });
  });

  it('should ...', inject([MotoristaService], (service: MotoristaService) => {
    expect(service).toBeTruthy();
  }));
});
