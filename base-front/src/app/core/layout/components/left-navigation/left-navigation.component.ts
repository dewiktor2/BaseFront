import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftNavigationComponent implements OnInit {
  @Output() logout = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit();
  }

}
