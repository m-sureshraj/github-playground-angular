import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { PlayGroundDataSharingService } from '../../services/play-ground-data-sharing.service';

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

  constructor(
      private router: Router,
      private activeRoute: ActivatedRoute,
      private dataSharing: PlayGroundDataSharingService
  ) {}

  ngOnInit(): void {
    // console.log(this.dataSharing.getPlayersName());
  }

  public handleFormReset(e: any): void {
    e.preventDefault();
    this.playersForm.reset();
  }

  public handleFormSubmit(): void {
    const { playerOne, playerTwo } = this.playersForm.value;
    this.dataSharing.setPlayersName([playerOne, playerTwo]);
    this.router.navigate(['./battle'], { relativeTo: this.activeRoute });
  }

  public isFieldInvalid(fieldName: string): boolean {
    return this.playersForm.get(fieldName).invalid &&
    (this.playersForm.get(fieldName).dirty ||
    this.playersForm.get(fieldName).touched);
  }
}
