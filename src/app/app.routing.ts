import { Routes } from '@angular/router';
import { state as HomeRoute} from './states/home/home.route';
import { state as PastTrialsRoute } from './states/past-trials/past-trials.route';
import { state as LoginSignupRoute } from './states/login-signup/login-signup.route';
import { state as HowItWorksRoute } from './states/how-it-works/how-it-works.route';

export const routes: Routes = [HomeRoute, PastTrialsRoute, LoginSignupRoute, HowItWorksRoute];
