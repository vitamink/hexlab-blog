import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LockedComponent } from './locked.component';
import { BootstrapPromptRouteDeactivatorService } from './bootstrap-prompt-route-deactivator.service';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'locked', component: LockedComponent,
    canDeactivate: [BootstrapPromptRouteDeactivatorService] }
];
