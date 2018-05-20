import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayGroundDataSharingService, GitHubService } from '../../services';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  public playersInfo: [any] = null;
  private points = { follower: 10, ownedRepo: 5, ownedRepoLike: 10 };
  private battleInProgress = false;

  constructor(
      private dataSharing: PlayGroundDataSharingService,
      private activeRoute: ActivatedRoute,
      private router: Router,
      private github: GitHubService
  ) {}

  ngOnInit() {
    if (this.dataSharing.getInvalidAccessToBattleStatus()) {
      this.dataSharing.setInvalidAccessToBattle(false);
    }

    this.activeRoute.data.pipe(first()).subscribe(({ usersInfo }) => {
      this.playersInfo = usersInfo;
    });
  }

  private calcPoints(repositories: [any], followersCount: number = 0) {
    // each follower worth 10 points
    let total = (followersCount * this.points.follower);

    // each star is worth 10 points + each owned repo worth 5 points
    repositories.forEach(({ fork, stargazers_count }) => {
      // ignore forked repository
      if (!fork) {
        total += (stargazers_count * this.points.ownedRepoLike) + this.points.ownedRepo;
      }
    });

    return total;
  }

  handleBattle() {
    this.battleInProgress = true;
    this.github.getPlayersRepositories(this.playersInfo)
      .pipe(first())
      .subscribe((repos: any) => {
        repos.forEach((repo, i) => {
          this.playersInfo[i].__points__ = this.calcPoints(repo, this.playersInfo[i].followers);
        });

        this.dataSharing.setPlayersInfo(this.playersInfo);
        this.router.navigate(['../battle-result'], { relativeTo: this.activeRoute });
      }, (err) => {
        this.battleInProgress = false;
        // todo: handle error
      });
  }
}
