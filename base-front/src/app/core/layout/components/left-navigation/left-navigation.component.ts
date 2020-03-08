import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftNavigationComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Input() theme: boolean;
  @Output() logout = new EventEmitter();

  get menuListWidth() {
    return this.isCollapsed ? { 'width': '140px'} : { 'width': '100%', 'border': '0'};
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit();
  }

  goToPage(page: string) {
    this.router.navigate([`${page}`])
  }

}
