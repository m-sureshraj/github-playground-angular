import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { GitHubService } from './github.service';
import { PlayGroundDataSharingService } from './play-ground-data-sharing.service';

@Injectable()
export class GitHubUsersInfoResolver implements Resolve<any> {
    constructor(
        private router: Router,
        private GH: GitHubService,
        private dataSharing: PlayGroundDataSharingService
    ) {}

    resolve(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Object> {
        const players = this.dataSharing.getPlayersName();

        if (!players) {
            this.dataSharing.setInvalidAccessToBattle(true);
            this.router.navigate(['/players']);
            return Promise.resolve(null);
        }

        return this.GH.getPlayersInfo(players)
            .then((playersInfo => playersInfo))
            .catch(e => {
                console.error(e);
                this.router.navigate(['/players']);
                return null;
            });
    }
}
