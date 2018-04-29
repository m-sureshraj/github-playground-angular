import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { PlayGroundDataSharingService } from '../../services';
import { LastRouteDetailsService } from '@shared/services';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  public playersForm = new FormGroup({
    playerOne: new FormControl('', Validators.required),
    playerTwo: new FormControl('', Validators.required)
  });
  public errors = [];
  public formSubmitProgress = false;

  constructor(
      private router: Router,
      private activeRoute: ActivatedRoute,
      public dataSharing: PlayGroundDataSharingService,
      private referrer: LastRouteDetailsService
  ) {}

  ngOnInit(): void {
    const previousRoute = this.referrer.getReferrer();

    if (previousRoute === '/players/battle') {
      if (this.dataSharing.getInvalidAccessToBattleStatus()) {
        this.errors.push({
          type: 'INVALID_ACCESS',
          msg: 'Select players first before starting the battle.'
        });

        return;
      }

      // populate form fields
      const playersName = this.dataSharing.getPlayersName();

      if (playersName && playersName.length === 2) {
        this.playersForm.setValue({
          playerOne: playersName[0], playerTwo: playersName[1]
        });
      }
    }
  }

  public handleFormReset(e: any): void {
    e.preventDefault();
    this.errors = [];
    this.playersForm.reset();
  }

  public handleFormSubmit(): void {
    const { playerOne, playerTwo } = this.playersForm.value;

    // if players name is equal show error msg
    if (playerOne.toLowerCase() === playerTwo.toLowerCase()) {
      // if error msg already displayed. do nothing.
      if (this.errors.find(error => error.type === 'IDENTICAL_PLAYERS')) return;

      this.errors.push({
        type: 'IDENTICAL_PLAYERS',
        msg: 'Player cant battle with him self. Select different player.'
      });

      return;
    }

    this.errors = [];
    this.dataSharing.setPlayersName([playerOne, playerTwo]);
    this.formSubmitProgress = true;
    this.router.navigate(['./battle'], { relativeTo: this.activeRoute })
      .then((status: boolean) => {
        if (!status) {
          this.errors.push({
            type: 'INVALID_PLAYERS',
            msg: 'The players you selected was invalid!'
          });
          this.formSubmitProgress = false;
        }
      });
  }

  public isFieldInvalid(fieldName: string): boolean {
    return this.playersForm.get(fieldName).invalid &&
    (this.playersForm.get(fieldName).dirty ||
    this.playersForm.get(fieldName).touched);
  }
}
