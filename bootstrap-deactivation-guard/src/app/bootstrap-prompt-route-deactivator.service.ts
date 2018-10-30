import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { BootstrapPromptRouteDeactivationComponent } from './bootstrap-prompt-route-deactivation-component';

@Injectable()
export class BootstrapPromptRouteDeactivatorService implements CanDeactivate<BootstrapPromptRouteDeactivationComponent> {

  canDeactivate(
    component: BootstrapPromptRouteDeactivationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): EventEmitter<boolean> | Promise<boolean> | boolean {
    if (component.shouldIntercept) {
      $('#cancelModal').modal('show');
      return component.navDialog.canNavigateAway;
    }

    return true;
  }
}
