import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { LastRouteDetailsService } from '@shared/services';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: ISubscription;

  constructor(
    private router: Router,
    private lastRoute: LastRouteDetailsService
  ) {}

  ngOnInit() {
    this.subscription = this.router.events
      .filter(e => e instanceof RoutesRecognized)
      .pairwise()
      .subscribe((e: any) => {
        this.lastRoute.setReferrer(e[0].urlAfterRedirects);
      });
  }

  ngOnDestroy() {
    // Note: following line never going to execute. Because this component
    // never going to get destroyed. Anyway I always prefer to unsubscribe
    // from subscription.
    this.subscription.unsubscribe();
  }
}
