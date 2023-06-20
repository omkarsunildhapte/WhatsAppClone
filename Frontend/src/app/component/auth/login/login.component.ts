import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from 'countries-list';
import { CountryService } from 'src/app/service/country.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PhoneErrorComponent } from 'src/app/component/dialog/phone-error/phone-error.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  countries!: any[];
  selectedCountry!: string;
  selectedPhoneCode: string = '+1';
  form!: FormGroup;
  dialogRef !: MatDialogRef<PhoneErrorComponent>;
  constructor(private countryService: CountryService, private formBuilder: FormBuilder, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      country: ['', Validators.required],
      phoneNumber: ['', [Validators.required]]
    });

    this.countryService.getCountries().subscribe(
      (data: any) => {
        this.countries = data;
        console.log(countries);

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
    console.log(this.selectedPhoneCode);
  }

  getPhoneCodeByName(countryName: string): string {
    const country = this.countries.find((c) => c.name === countryName);
    return country ? country.phoneCode : '';
  }


  onSubmit() {
    if (this.form.valid && this.selectedCountry != " ") {
      this.router.navigate(['otp']);
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

