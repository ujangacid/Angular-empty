import { Directive, HostBinding, Input } from '@angular/core';

enum ButtonColor {
  primary ='btn btn-primary',
  secondary ='btn btn-secondary',
  danger ='btn btn-danger',
  warning ='btn btn-warning'

}
enum ButtonSize {
  lg = 'btn-lg',
  md = 'btn-md',
  sm = 'btn-sm'

}

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {

  @Input() color: 'primary' | 'secondary' | 'danger' | 'warning' = 'primary';
  @Input() size: 'lg' | 'md' | 'sm' = 'sm';
  @Input() disabled: any;
  constructor() { }

  @HostBinding('class')
  get applyStyles():string {
    const buttonColor:ButtonColor = ButtonColor[this.color];
    const buttonSize:ButtonSize = ButtonSize[this.size];
    const disabled:string = this.disabled === false ? 'disabled': '';

    return `btn ${buttonColor} ${buttonSize} `;

  }

}
