import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IssuesService } from './issue-service';

describe('issues service', () => {
  let service: IssuesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssuesService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(IssuesService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service.getIssues()).toBeTruthy();
  });
});

