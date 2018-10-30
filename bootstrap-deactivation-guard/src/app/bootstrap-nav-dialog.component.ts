import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bootstrap-nav-dialog',
  template: `
    <div class="modal" id="cancelModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
            <button type="button" class="close" (click)="navigateAway(false)" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="navigateAway(false)" data-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary" (click)="navigateAway(true)" data-dismiss="modal">Yes</button>
          </div>
        </div>
      </div>
    </div>
  `})
export class BootstrapNavDialogComponent implements OnInit {
  @Input() title: string;
  canNavigateAway: EventEmitter<boolean> = new EventEmitter<boolean>();

  navigateAway(allowNavigation: boolean) {
    this.canNavigateAway.emit(allowNavigation);
  }

  ngOnInit(): void {
  }
}
