import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[bootstrap-modal-trigger]'
})
export class BootstrapModalTriggerDirective implements OnInit {
  @Input('bootstrap-dialog-trigger') elementId: string;
  private dialogElement: HTMLElement;

  constructor(element: ElementRef) {
    this.dialogElement = element.nativeElement;
  }

  ngOnInit(): void {
    this.dialogElement.addEventListener('click', e => {
      $(`#${this.elementId}`).modal('show');
    });
  }
}
