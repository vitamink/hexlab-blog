import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routes } from './routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LockedComponent } from './locked.component';
import { BootstrapPromptRouteDeactivatorService } from './bootstrap-prompt-route-deactivator.service';
import { BootstrapNavDialogComponent } from './bootstrap-nav-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LockedComponent,
    BootstrapNavDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BootstrapPromptRouteDeactivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
