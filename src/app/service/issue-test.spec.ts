import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ServiceService } from './issue-service';

describe('ServiceService', () => {
  let service: ServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ServiceService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service.getIssues()).toBeTruthy();
  });
});
