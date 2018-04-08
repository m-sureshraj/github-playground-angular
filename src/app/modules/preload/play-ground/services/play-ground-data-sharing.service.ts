import { Injectable } from '@angular/core';

@Injectable()
export class PlayGroundDataSharingService {
    private playersName: [string];

    public getPlayersName(): [string] {
        return this.playersName;
    }

    public setPlayersName(names: [string]): void {
        this.playersName = names;
    }
}
