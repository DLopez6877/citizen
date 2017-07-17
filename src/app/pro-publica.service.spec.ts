import { TestBed, inject } from '@angular/core/testing';

import { ProPublicaService } from './pro-publica.service';

describe('ProPublicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProPublicaService]
    });
  });

  it('should ...', inject([ProPublicaService], (service: ProPublicaService) => {
    expect(service).toBeTruthy();
  }));
});
