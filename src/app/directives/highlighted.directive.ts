import {Directive, HostBinding, HostListener, Input, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlighted = new EventEmitter();

  constructor() {
  }

  /*
  Decorator that marks a DOM property as a host-binding property and supplies configuration metadata.
  Angular automatically checks host property bindings during change detection,
  and if a binding changes it updates the host element of the directive.
  */
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  /*
  Type of the HostListener metadata.
  Decorator that binds a DOM event to a host listener and supplies configuration metadata.
  Angular invokes the supplied handler method when the host element emits the specified event,
  and updates the bound element with the result.
  */
  @HostListener('mouseover', ['$event'])
  mouseOver($event: any) {
    this.isHighlighted = true;
    this.toggleHighlighted.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseOut() {
    this.isHighlighted = false;
    this.toggleHighlighted.emit(this.isHighlighted);
  }

}
