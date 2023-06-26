import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './component/auth/otp/otp.component';
import { ChatheaderComponent } from './component/main/chatheader/chatheader.component';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatsComponent } from './component/features/chats/chats.component';
import { WelcomeComponent } from './component/slider/welcome/welcome.component';
import { TeamsServiceComponent } from './component/slider/teams-service/teams-service.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { NumericOnlyDirective } from './directive/numeric-only.directive';
import { AddUnderscoreDirective } from './directive/add-underscore.directive';
import { CamreaComponent } from './component/features/camrea/camrea.component';
import { PhoneErrorComponent } from './component/dialog/phone-error/phone-error.component';
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ProfileComponent } from './component/features/profile/profile.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { WebcamModule } from 'ngx-webcam';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    ChatheaderComponent,
    ChatsComponent,
    WelcomeComponent,
    TeamsServiceComponent,
    NumericOnlyDirective,
    AddUnderscoreDirective,
    CamreaComponent,
    PhoneErrorComponent,
    ProfileComponent,
  ],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    WebcamModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
