import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMasonryLayoutComponent } from './ngx-masonry-layout.component';

describe('NgxMasonryLayoutComponent', () => {
  let component: NgxMasonryLayoutComponent;
  let fixture: ComponentFixture<NgxMasonryLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMasonryLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMasonryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
