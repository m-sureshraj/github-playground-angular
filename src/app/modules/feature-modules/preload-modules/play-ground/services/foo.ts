import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
// import { Observable } from "rxjs/Rx";
import { GitHubService } from './github.service';
import { PlayGroundDataSharingService } from './play-ground-data-sharing.service';
// import 'rxjs/add/operator/catch';

@Injectable()
export class GitHubUsersInfoResolver implements Resolve<any> {
    constructor(
        private router: Router,
        private GH: GitHubService,
        private DataSharing: PlayGroundDataSharingService
    ) {}

    resolve(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Object> {
        const players = this.DataSharing.getPlayersName();

        return this.GH.getPlayersInfo(players)
            .then((playersInfo => playersInfo))
            .catch(() => {
                // todo: show invalid users msg to the user
                this.router.navigate(['/players']);
                return null;
            });

        // return this.GH.getPlayersInfo(players)
        //     .catch(({ status }) => {
        //         if (status === 404) {
        //             console.log('not found show msg to the user');
        //         }
        //
        //         this.router.navigate(['/players']);
        //         return null;
        //     });
    }
}
