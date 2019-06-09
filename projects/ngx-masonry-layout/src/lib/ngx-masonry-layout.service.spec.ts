import { TestBed } from '@angular/core/testing';

import { NgxMasonryLayoutService } from './ngx-masonry-layout.service';

describe('NgxMasonryLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMasonryLayoutService = TestBed.get(NgxMasonryLayoutService);
    expect(service).toBeTruthy();
  });
});
