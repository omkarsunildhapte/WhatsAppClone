import { Component } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  time!: number;
  interval: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.time = 60;
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
