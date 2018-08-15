import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UtilityService {
  toggleEvent = new Subject<boolean>();
  toggle$ = this.toggleEvent.asObservable();

  toggle(toggled) {
    this.toggleEvent.next(toggled);
  }

  constructor() {}
}
