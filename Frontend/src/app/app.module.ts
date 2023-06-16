import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { OtpComponent } from './component/auth/otp/otp.component';
import { ChatheaderComponent } from './component/main/chatheader/chatheader.component';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatsComponent } from './component/main/chats/chats.component';
import { WelcomeComponent } from './component/slider/welcome/welcome.component';
import { TeamsServiceComponent } from './component/slider/teams-service/teams-service.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    ChatheaderComponent,
    ChatsComponent,
    WelcomeComponent,
    TeamsServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
