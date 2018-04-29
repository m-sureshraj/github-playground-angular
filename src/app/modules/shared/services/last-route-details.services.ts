// https://github.com/angular/angular/issues/11268
import { Injectable } from '@angular/core';

@Injectable()
export class LastRouteDetailsService {
  public referrer = '';

  public setReferrer(referrer: string) {
    this.referrer = referrer;
  }

  public getReferrer(): string {
    return this.referrer;
  }
}
