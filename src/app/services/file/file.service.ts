import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentViewerDialogComponent } from '../../components/reusable/document-viewer-dialog/document-viewer-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private dialog = inject(MatDialog);
  constructor() {}

  /** Download a file, automatically using the filename from the URL */
  downloadFile(fileUrl: string) {
    if (!fileUrl) return;

    // Extract filename from URL
    const fileName = fileUrl.split('/').pop() || 'download';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName; // dynamic filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /** Open a file in a new dialog window */
  viewFile(fileUrl: string) {
    const dialogRef = this.dialog.open(DocumentViewerDialogComponent, {
      width: 'min(90vw, 1200px)',
      height: 'min(85vh, 800px)',
      maxWidth: '90vw',
      maxHeight: '85vh',
      panelClass: 'document-dialog-panel',
      data: { url: fileUrl },
      autoFocus: false,
      restoreFocus: false,
      hasBackdrop: true,
      disableClose: false,
    });

    return dialogRef;
  }
}
