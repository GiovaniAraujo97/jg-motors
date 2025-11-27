import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'planos', component: ServicesComponent },
	{ path: 'contato', component: ContactPageComponent },
	{ path: '**', redirectTo: '' }
];
