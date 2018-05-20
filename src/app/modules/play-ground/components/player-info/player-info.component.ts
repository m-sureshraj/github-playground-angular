import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  @Input() player: any;
  @Input() winner: any;
  private isWinner = null;

  ngOnInit() {
    if (typeof this.winner !== 'undefined') {
      this.isWinner = (this.winner.id === this.player.id);
    }
  }
}
