import { TestBed, inject } from '@angular/core/testing';

import { LgaMessageService } from './lga-message.service';

describe('LgaMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LgaMessageService]
    });
  });

  it('should be created', inject([LgaMessageService], (service: LgaMessageService) => {
    expect(service).toBeTruthy();
  }));
});
