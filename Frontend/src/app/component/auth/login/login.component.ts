import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { CountryService } from 'src/app/service/countryServies/country.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PhoneErrorComponent } from 'src/app/component/dialog/phone-error/phone-error.component';
import { OtpVerificationService } from 'src/app/service/OtpServies/otp-verfication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  countries!: any[];
  selectedCountry!: string;
  selectedPhoneCode: string = '+1';
  verificationCode: string = '';
  verificationCodeSend: boolean = false;
  confirmOtp: any
  form: FormGroup;

  dialogRef !: MatDialogRef<PhoneErrorComponent>;
  constructor(private countryService: CountryService, private formBuilder: FormBuilder,
    private router: Router, private dialog: MatDialog,
    private otpservies: OtpVerificationService) {
    this.form = this.formBuilder.group({
      country: ['', Validators.required],
      phoneNumber: ['8530842830', [Validators.required]]
    });
  }

  ngOnInit(): void {


    this.countryService.getCountries().subscribe(
      (data: any) => {
        this.countries = data;
      },
      (error: any) => {
        console.error('Failed to fetch countries:', error);
      }
    );
  }
  onCountrySelected(event: Event) {
    this.selectedCountry = (event.target as HTMLSelectElement).value;
    this.selectedPhoneCode = this.getPhoneCodeByName(this.selectedCountry);
    console.log(this.selectedCountry);
  }

  getPhoneCodeByName(countryName: string): string {
    const country = this.countries.find((c) => c.name === countryName);
    return country ? country.phoneCode : '';
  }


  onSubmit() {
    if (this.form.valid && this.selectedCountry != " ") {
      const phoneNumber = this.selectedPhoneCode + this.form.get('phoneNumber')?.value;
      this.router.navigate(['/otp'])
    }
    else {
      this.dialogRef = this.dialog.open(PhoneErrorComponent, {
        width: '250px',
        data: { message: 'This is a dynamic message!' }
      });

      this.dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed:', result);
      });
    }
  }
}

