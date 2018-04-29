import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayGroundDataSharingService } from '../../services';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  public playersInfo: [Object] = null;

  constructor(
      private dataSharing: PlayGroundDataSharingService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.dataSharing.getInvalidAccessToBattleStatus()) {
      this.dataSharing.setInvalidAccessToBattle(false);
    }

    this.route.data.subscribe(({ usersInfo }) => {
      this.playersInfo = usersInfo;
    });
  }
}
