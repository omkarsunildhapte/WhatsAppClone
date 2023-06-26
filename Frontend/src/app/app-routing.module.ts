import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsServiceComponent } from './component/slider/teams-service/teams-service.component';
import { OtpComponent } from './component/auth/otp/otp.component';
import { LoginComponent } from './component/auth/login/login.component';
import { ChatheaderComponent } from './component/main/chatheader/chatheader.component';
import { WelcomeComponent } from './component/slider/welcome/welcome.component';
import { ChatsComponent } from './component/features/chats/chats.component';
import { ProfileComponent } from './component/features/profile/profile.component';
import { CamreaComponent } from './component/features/camrea/camrea.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'terms', component: TeamsServiceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'main', component: ChatheaderComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'camera', component: CamreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
