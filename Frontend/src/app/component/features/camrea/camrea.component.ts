import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camrea',
  templateUrl: './camrea.component.html',
  styleUrls: ['./camrea.component.css']
})
export class CamreaComponent {
  @ViewChild('video', { static: true })

  private videoElement!: ElementRef;
  @ViewChild('fileInput', { static: true })
  fileInput!: any;
  video!: HTMLVideoElement;
  mediaStream!: MediaStream;
  isFrontCamera = true;
  constructor(private router: Router) {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setCanvasDimensions();
  }
  ngOnInit(): void {
    this.video = this.videoElement.nativeElement;

    // Request permission to access the camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.video.srcObject = stream;
        this.video.play();
      })
      .catch(err => console.error('Error accessing the camera: ', err));

    this.setCanvasDimensions();
  }

  setCanvasDimensions(): void {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
      console.error('2D context is not supported');
      return;
    }
    const videoWidth = this.video.videoWidth;
    const videoHeight = this.video.videoHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const aspectRatio = videoWidth / videoHeight;
    let canvasWidth = screenWidth;
    let canvasHeight = screenWidth / aspectRatio;
    if (canvasHeight > screenHeight) {
      canvasHeight = screenHeight;
      canvasWidth = screenHeight * aspectRatio;
    }
    const xOffset = (screenWidth - canvasWidth) / 2;
    const yOffset = (screenHeight - canvasHeight) / 2;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context.drawImage(this.video, 0, 0, videoWidth, videoHeight, xOffset, yOffset, canvasWidth, canvasHeight);
    const image = canvas.toDataURL('image/png');
    console.log('Cropped image:', image);
  }

  capture(): void {
    const canvas = document.createElement('canvas');
    canvas.width = this.video.videoWidth;
    canvas.height = this.video.videoHeight;

    const context = canvas.getContext('2d');
    if (!context) {
      console.error('2D context is not supported');
      return;
    }
    context.drawImage(this.video, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL('image/png');
    console.log('Captured image:', image);
    this.router.navigate(['/profile']);
  }

  handleFileInput(): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.jpg';
    fileInput.style.display = 'none';

    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        // Access the file here
        console.log('Selected file:', file);
        this.router.navigate(['/profile']);
      }
      document.body.removeChild(fileInput);
    };

    document.body.appendChild(fileInput);
    fileInput.click();
  }
  toggleCamera(): void {
    // Stop the current camera stream
    this.mediaStream.getTracks().forEach(track => track.stop());

    // Toggle the camera mode
    this.isFrontCamera = !this.isFrontCamera;

    // Request permission for the new camera
    navigator.mediaDevices.getUserMedia({ video: { facingMode: this.isFrontCamera ? 'user' : 'environment' } })
      .then(stream => {
        this.mediaStream = stream;
        this.video.srcObject = stream;
        this.video.play();
      })
      .catch(err => console.error('Error accessing the camera: ', err));
  }
}
