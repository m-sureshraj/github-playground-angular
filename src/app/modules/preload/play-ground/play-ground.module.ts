import { NgModule } from '@angular/core';

// custom modules
import { SharedModule } from '../../shared/shared.module';
import { PlayGroundRoutingModule } from './play-ground-routing.module';

// services
import {
  GitHubService,
  PlayGroundDataSharingService,
  GitHubUsersInfoResolver
} from './services';

// components
import {
  PlayersComponent,
  BattleComponent,
  PlayerInfoComponent
} from './components';

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
    PlayerInfoComponent
  ]
})
export class PlayGroundModule {
  constructor() {
    console.log('play ground module loaded..');
  }
}
