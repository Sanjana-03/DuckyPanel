import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'td-loading-mask',
  styleUrls: ['./loading-mask.component.scss'],
  templateUrl: './loading-mask.component.html',
})
export class TdLoadingMaskComponent implements OnInit {
  _defaultAnimationDuration = '1.3s'

  /**
   * Binding style rules on input values
   */
  @HostBinding('style.borderRadius') @Input() borderRadius = '4px'
  @HostBinding('style.width') @Input() width = '110px'
  @HostBinding('style.height') @Input() height = '16px'
  @HostBinding('class.td-loading-mask-animated') @Input() animated = true

  /**
   * Referencing animation span to dynamically change animation duration
   */
  @ViewChild('animSpan', { static: true }) animSpan: ElementRef
  @Input() animationDuration: string = this._defaultAnimationDuration

  /**
   * Changing animation duration onInit
   * Binding animation onInit to prevent constant animation duration changes
   *
   */
  ngOnInit(): void {
    if (this.animationDuration !== this._defaultAnimationDuration) {
      this.animSpan.nativeElement.style.animationDuration = this.animationDuration
    }
  }
}
