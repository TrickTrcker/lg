import { MatDialogRef } from "@angular/material";
import { LgaMessageService } from "../services/message/lga-message.service";

export class BaseComponent {

	constructor(private messageService: LgaMessageService) {}

	closeDialog(dialogRef: MatDialogRef<any>) {
		dialogRef.close();
	}

	showSuccessMessage(detail: any, stackTrace?: any) {
		this.messageService.showSuccessMessage(detail, stackTrace);
	}

	showErrorMessage(detail: any, stackTrace?: any) {
		this.messageService.showErrorMessage(detail, stackTrace);
	}
}