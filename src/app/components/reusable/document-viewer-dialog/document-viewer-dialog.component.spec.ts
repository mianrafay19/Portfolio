import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentViewerDialogComponent } from './document-viewer-dialog.component';

describe('DocumentViewerDialogComponent', () => {
  let component: DocumentViewerDialogComponent;
  let fixture: ComponentFixture<DocumentViewerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentViewerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentViewerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
