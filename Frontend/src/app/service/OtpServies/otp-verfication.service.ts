import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {
  constructor(private afAuth: AngularFireAuth) {
    firebase.initializeApp(environment.firebaseConfig);
  }

  signInWithPhoneNumber(phoneNumber: string, applicationVerifier: firebase.auth.ApplicationVerifier): Promise<any> {
    return this.afAuth.signInWithPhoneNumber(phoneNumber, applicationVerifier);
  }

  sendOtpCode(phoneNumber: string): Promise<any> {
    // Implement your custom logic to send an SMS code manually
    // using a different service and return a promise that resolves
    // with the verification ID or rejects with an error.

    return new Promise<string>((resolve, reject) => {
      // Implement your custom SMS code sending logic here
      // For example, you can use an HTTP request to a server-side
      // endpoint that sends the SMS code and returns the verification ID.

      // Simulating a delay to mimic an asynchronous operation
      setTimeout(() => {
        const verificationId = 'CUSTOM_VERIFICATION_ID'; // Replace with the actual verification ID
        resolve(verificationId);
      }, 2000); // Simulating a 2-second delay
    })
      .then((verificationId: string) => {
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, 'MANUALLY_ENTERED_SMS_CODE');
        return this.afAuth.signInWithCredential(credential);
      });
  }
}
