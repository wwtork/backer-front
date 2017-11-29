import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHostingState]'
})
export class HostingStateDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
