import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingOverlayNewComponent } from './loading-overlay-new.component';

describe('LoadingOverlayNewComponent', () => {
  let component: LoadingOverlayNewComponent;
  let fixture: ComponentFixture<LoadingOverlayNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingOverlayNewComponent]
    });
    fixture = TestBed.createComponent(LoadingOverlayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
