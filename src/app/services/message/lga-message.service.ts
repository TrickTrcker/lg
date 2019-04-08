import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/components/utils/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class LgaMessageService {

	constructor(private messageService: MessageService,
		private dialog: MatDialog) { }

  showSuccessMessage(detail: any, stackTrace?: any) {
		this.messageService.add({
			severity: 'success',
			summary: detail,
			detail: (stackTrace != null || stackTrace !== undefined) ? stackTrace : ''
		});
	}

	showErrorMessage(detail: any, stackTrace?: any) {
		this.messageService.add({
			severity: 'error',
			summary: detail,
			detail: (stackTrace != null || stackTrace !== undefined) ? stackTrace : ''
		});
	}

	openConfirmDialog(header: string, message: string, callback) {
		const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.position = {
      top: '270px',
      left: '500px'
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
    dialogRef.componentInstance.confirmHeader = header;
		dialogRef.componentInstance.confirmMessage = message;
    return dialogRef.componentInstance.confirmResult.subscribe(e => {
			callback(e);
			dialogRef.close();
    });
	}
}
