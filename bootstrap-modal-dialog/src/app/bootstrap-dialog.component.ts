import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bootstrap-dialog',
  template: `
    <div class="modal" id="simple-modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `})
export class BootstrapDialogComponent implements OnInit {
  @Input() title: string;
  // @Input()

  ngOnInit(): void {
  }
}
