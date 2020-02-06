import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CamsApiService } from './camsapi.service';

describe('CamsapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('check instance', () => {
    const service: CamsApiService = TestBed.get(CamsApiService);
    expect(service).toBeTruthy();
  });
});
