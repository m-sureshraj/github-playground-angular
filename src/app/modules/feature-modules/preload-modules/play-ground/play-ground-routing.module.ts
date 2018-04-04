import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayGroundComponent } from './play-ground.component';
import { PlayersComponent } from './components/players/players.component';
import { BattleComponent } from './components/battle/battle.component';

import { GitHubUsersInfoResolver } from './services/foo';

const routes: Routes = [
  {
    path: '',
    component: PlayGroundComponent,
    children: [
      { path: '', component: PlayersComponent },
      { path: 'battle', component: BattleComponent, resolve: { usersInfo: GitHubUsersInfoResolver } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayGroundRoutingModule { }
