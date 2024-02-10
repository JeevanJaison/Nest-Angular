import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DealsComponent } from './components/pages/deals/deals.component';
import { CustomerCareComponent } from './components/pages/customer-care/customer-care.component';
import { LoginComponent } from './components/units/login/login.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SinglePageComponent } from './components/pages/single-page/single-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customer', component: CustomerCareComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'deals', component: DealsComponent },
    { path: 'deals/:id', component: SinglePageComponent }
];
