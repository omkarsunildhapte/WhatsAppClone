import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camrea',
  templateUrl: './camrea.component.html',
  styleUrls: ['./camrea.component.css']
})
export class CamreaComponent {
  @ViewChild('video')
  videoElement!: ElementRef;
  startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const videoElement: HTMLVideoElement = this.videoElement.nativeElement;
        videoElement.srcObject = stream;
        videoElement.play();
      })
      .catch(error => {
        console.error('Error accessing the camera:', error);
      });
  }
}
