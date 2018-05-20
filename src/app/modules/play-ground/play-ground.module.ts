import { NgModule } from '@angular/core';

// custom modules
import { SharedModule } from '@shared/shared.module';
import { PlayGroundRoutingModule } from './play-ground-routing.module';

// services
import {
  GitHubService,
  PlayGroundDataSharingService,
  GitHubUsersInfoResolver
} from './services';

// containers
import { PlayersComponent, BattleComponent, BattleResultComponent } from './containers';

// components
import { PlayerInfoComponent } from './components';

@NgModule({
  imports: [
    SharedModule,
    PlayGroundRoutingModule
  ],
  providers: [
    GitHubService,
    PlayGroundDataSharingService,
    GitHubUsersInfoResolver
  ],
  declarations: [
    PlayersComponent,
    BattleComponent,
    PlayerInfoComponent,
    BattleResultComponent
  ]
})
export default class PlayGroundModule {
  constructor() {}
}
