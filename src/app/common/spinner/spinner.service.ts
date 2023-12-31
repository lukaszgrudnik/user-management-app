import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  display: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
