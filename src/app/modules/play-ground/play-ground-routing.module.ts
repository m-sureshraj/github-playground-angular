import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PlayersComponent, BattleComponent, BattleResultComponent
} from './containers';
import { GitHubUsersInfoResolver } from './services';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PlayersComponent },
      {
        path: 'battle',
        component: BattleComponent,
        resolve: { usersInfo: GitHubUsersInfoResolver }
      },
      {
        path: 'battle-result',
        component: BattleResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayGroundRoutingModule {}
