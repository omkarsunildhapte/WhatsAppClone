import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-service',
  templateUrl: './teams-service.component.html',
  styleUrls: ['./teams-service.component.css']
})
export class TeamsServiceComponent {
  constructor(private router: Router) { }
}
