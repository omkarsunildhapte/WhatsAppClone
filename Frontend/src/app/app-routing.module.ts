import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsServiceComponent } from './component/slider/teams-service/teams-service.component';
import { OtpComponent } from './component/auth/otp/otp.component';
import { LoginComponent } from './component/auth/login/login.component';
import { ChatheaderComponent } from './component/main/chatheader/chatheader.component';
import { WelcomeComponent } from './component/slider/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'terms', component: TeamsServiceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'chat', component: ChatheaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
