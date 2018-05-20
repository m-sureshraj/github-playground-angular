import { Component, OnInit } from '@angular/core';
import { PlayGroundDataSharingService, } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle-result',
  templateUrl: './battle-result.component.html',
  styleUrls: ['./battle-result.component.css']
})
export class BattleResultComponent implements OnInit {
  public playersInfo: [any] = null;
  public winner = null;

  constructor(
    private router: Router,
    private dataSharing: PlayGroundDataSharingService
  ) {}

  ngOnInit() {
    this.playersInfo = this.dataSharing.getPlayersInfo();

    if (!this.playersInfo) return this.router.navigate(['/players']);

    this.winner = this.getWinner();
  }

  private getWinner() {
    const { __points__: playerOnePoints } = this.playersInfo[0];
    const { __points__: playerTwoPoints } = this.playersInfo[1];

    if (playerOnePoints === playerTwoPoints) return null;

    return (playerOnePoints > playerTwoPoints) ? this.playersInfo[0] : this.playersInfo[1];
  }
}
