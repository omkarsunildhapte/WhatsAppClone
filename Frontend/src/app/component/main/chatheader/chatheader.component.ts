import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatheader',
  templateUrl: './chatheader.component.html',
  styleUrls: ['./chatheader.component.css']
})
export class ChatheaderComponent {
  showInput = false;
  showInput2 = false;
  constructor(private router: Router) { }
  startCamera(): void {
    this.router.navigate(['/camera']);
  }
}
