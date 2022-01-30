import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IssuesService } from './issue-service';

describe('issues service', () => {
  let service: IssuesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssuesService],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(IssuesService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return issue list and by GET method', () => {
    const issueMock: any[] = [{ title: 'issue-1' }, { title: 'issue-2' }];
    service.getIssues().subscribe((issues) => {
      expect(issues.length).toEqual(issueMock.length);
    });
    const req = httpMock.expectOne(`${service['url']}`);
    req.flush(issueMock);
    expect(req.request.method).toBe('GET');
  });
});
