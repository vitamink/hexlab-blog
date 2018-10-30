import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { BootstrapDialogComponent } from './bootstrap-dialog.component';
import { BootstrapDialogTriggerDirective } from './bootstrap-dialog-trigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BootstrapDialogComponent,
    BootstrapDialogTriggerDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
