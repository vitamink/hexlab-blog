import {Component, OnInit, ViewChild} from '@angular/core';
import {BootstrapNavDialogComponent} from './bootstrap-nav-dialog.component';
import {BootstrapPromptRouteDeactivationComponent} from './bootstrap-prompt-route-deactivation-component';

@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.css']
})
export class LockedComponent implements OnInit, BootstrapPromptRouteDeactivationComponent {
  shouldIntercept: boolean = true;
  @ViewChild(BootstrapNavDialogComponent) navDialog: BootstrapNavDialogComponent;

  constructor() { }

  ngOnInit() {
  }

}
