import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-phone-error',
  templateUrl: './phone-error.component.html',
  styleUrls: ['./phone-error.component.css']
})
export class PhoneErrorComponent {
  constructor(
    public dialogRef: MatDialogRef<PhoneErrorComponent>,
  ) { }

  closeDialog() {
    this.dialogRef.close('Dialog closed!');
  }
}
