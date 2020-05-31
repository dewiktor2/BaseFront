import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftNavigationComponent {
  @Input() theme: string;
  @Input() set isCollapsed(isCollapsed: boolean) {
    this._isCollapsed = isCollapsed;
    this.changeMenuListWidthStyle();
  }
  _isCollapsed: boolean;
  menuListWidth = {};
  @Output() logout = new EventEmitter();

  get isCollapsed() {
    return this._isCollapsed;
  }

  constructor(private router: Router) { }

  changeMenuListWidthStyle() {
    this.menuListWidth = this.isCollapsed
      ? { 'width': '70px' }
      : { 'width': '100%' };
  }

  onLogout() {
    this.logout.emit();
  }

  goToPage(page: string) {
    this.router.navigate([`${page}`])
  }
}
