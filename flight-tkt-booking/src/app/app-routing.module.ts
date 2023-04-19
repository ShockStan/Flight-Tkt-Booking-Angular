import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ConfirmationComponent } from './book/confirmation/confirmation.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { BookedTicketsComponent } from './book/booked-tickets/booked-tickets.component';


const routes: Routes = [
      { path:'', redirectTo: 'login', pathMatch: 'full'},
      { path:'login', component: LoginComponent},
      { path:'signup', component: SignupComponent},
      { path:'h', component: HeadernavComponent, canActivate: [AuthGuardGuard], children: [
        {path:'home', component: HomeComponent},
        {path:'contact', component: ContactComponent},
        {path:'book/:flightNo', component: BookComponent},
        {path:'book/confirm/:flightNo', component:ConfirmationComponent},
        {path:'tickets/showbooked', component: BookedTicketsComponent},       
      ]},
      { path: 'flight', canActivate: [AuthGuardGuard], loadChildren: () => import('./flight/flight.module').then(m => m.FlightModule) },
      { path: '**', component: LoginComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
