import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-page-header-title',
    templateUrl: './page-header-title.component.html',
    styleUrls: ['./page-header-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PageHeaderTitleComponent {

  constructor() { }
}
