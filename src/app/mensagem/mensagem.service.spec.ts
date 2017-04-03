import { TestBed, inject } from '@angular/core/testing';

import { MensagemService } from './mensagem.service';

describe('MensagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensagemService]
    });
  });

  it('should ...', inject([MensagemService], (service: MensagemService) => {
    expect(service).toBeTruthy();
  }));
});