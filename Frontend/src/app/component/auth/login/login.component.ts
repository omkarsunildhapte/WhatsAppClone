import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { countries } from 'countries-list';
import { CountryService } from 'src/app/service/country.service';

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

  constructor(private countryService: CountryService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      country: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('\\d*')]]
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

  }
}


