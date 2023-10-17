import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="curtain" *ngIf="spinnerService.display | async">
    <span class="curtain__spinner"></span>
  </div>`,
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  constructor(public spinnerService: SpinnerService) {}
}
