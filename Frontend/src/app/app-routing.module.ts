import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsServiceComponent } from './component/slider/teams-service/teams-service.component';
import { OtpComponent } from './component/auth/otp/otp.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
