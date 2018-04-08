import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";

import { ActivatedRoute } from '@angular/router';

import { GitHubService } from '../../services/github.service';
import { PlayGroundDataSharingService } from '../../services/play-ground-data-sharing.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit, OnDestroy {
  public loading: boolean = false;
  private subscription: ISubscription;
  public playersInfo: [Object];

  constructor(
      private gitHub: GitHubService,
      private dataSharing: PlayGroundDataSharingService,
      private bar: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.dataSharing.getPlayersName());

    this.bar.data.subscribe(({ usersInfo }) => {
      console.log(usersInfo);
    });

    // this.loading = true;
    // this.subscription = this.gitHub
    //     .getPlayersInfo(['m-sureshraj', 'iswanj'])
    //     .subscribe((data: any) => {
    //       this.playersInfo = data;
    //       this.loading = false;
    //     });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
