import { Component } from '@angular/core';
import { countries } from 'countries-list';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  countryOptions: any[] = [];
  country: string = '';

  constructor() {
    this.countryOptions = Object.values(countries);

  }
  onCountrySelected(event: Event) {
    const selectedCountry = (event.target as HTMLSelectElement).value;
    console.log(selectedCountry);
    this.country = selectedCountry;
  }
}




