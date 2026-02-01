// Component TypeScript (document-viewer-dialog.component.ts)
import { Component, Inject } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatModule } from '../../../module/mat.module';

@Component({
  selector: 'app-document-viewer-dialog',
  standalone: true,
  imports: [PdfViewerModule, MatModule],
  templateUrl: './document-viewer-dialog.component.html',
  styleUrls: ['./document-viewer-dialog.component.scss']
})
export class DocumentViewerDialogComponent {
  zoom = 1; // default zoom level
  isFullscreen = false;

  constructor(
    private dialogRef: MatDialogRef<DocumentViewerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { url: string }
  ) {}

  zoomIn(): void {
    this.zoom = Math.min(this.zoom + 0.25, 3);
  }

  zoomOut(): void {
    this.zoom = Math.max(this.zoom - 0.25, 0.25);
  }

 

  onClose(): void {
    this.dialogRef.close();
  }
}