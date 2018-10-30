import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[bootstrap-dialog-trigger]'
})
export class BootstrapDialogTriggerDirective implements OnInit {
  private dialogElement: HTMLElement;

  constructor(element: ElementRef) {
    this.dialogElement = element.nativeElement;
  }

  ngOnInit(): void {
    this.dialogElement.addEventListener('click', e => {
      $('#simple-modal').modal('show');
    });
  }

}
