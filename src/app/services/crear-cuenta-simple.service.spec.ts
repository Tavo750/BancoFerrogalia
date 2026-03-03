import { TestBed } from '@angular/core/testing';

import { CrearCuentaSimpleService } from './crear-cuenta-simple.service';

describe('CrearCuentaSimpleService', () => {
  let service: CrearCuentaSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearCuentaSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
