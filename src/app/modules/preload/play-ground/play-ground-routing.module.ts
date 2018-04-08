import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './components/players/players.component';
import { BattleComponent } from './components/battle/battle.component';

import { GitHubUsersInfoResolver } from './services/foo';

// route without component
// http://vsavkin.tumblr.com/post/146722301646/angular-router-empty-paths-componentless-routes
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PlayersComponent },
      {
        path: 'battle',
        component: BattleComponent,
        resolve: { usersInfo: GitHubUsersInfoResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayGroundRoutingModule { }
