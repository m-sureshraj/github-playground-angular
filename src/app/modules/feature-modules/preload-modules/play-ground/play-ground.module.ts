import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PlayGroundRoutingModule } from './play-ground-routing.module';

// services
import { GitHubService } from './services/github.service';
import { PlayGroundDataSharingService } from './services/play-ground-data-sharing.service';
import { GitHubUsersInfoResolver } from './services/foo';

// components
import { PlayGroundComponent } from './play-ground.component';
import { PlayersComponent } from './components/players/players.component';
import { BattleComponent } from './components/battle/battle.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';

@NgModule({
  imports: [
    SharedModule,
    PlayGroundRoutingModule
  ],
  providers: [GitHubService, PlayGroundDataSharingService, GitHubUsersInfoResolver],
  declarations: [
    PlayGroundComponent,
    PlayersComponent,
    BattleComponent,
    PlayerInfoComponent
  ]
})
export class PlayGroundModule {
  constructor() {}
}
