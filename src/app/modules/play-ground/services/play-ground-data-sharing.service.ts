import { Injectable } from '@angular/core';

@Injectable()
export class PlayGroundDataSharingService {
    private playersName: [string];
    private invalidAccessToBattle: boolean = null;
    private playersInfo: [any];

    public getPlayersName(): [string] {
        return this.playersName;
    }

    public setPlayersName(names: [string]): void {
        this.playersName = names;
    }

    public setInvalidAccessToBattle(status: boolean): void {
        this.invalidAccessToBattle = status;
    }

    public getInvalidAccessToBattleStatus(): boolean {
        return this.invalidAccessToBattle;
    }

    public getPlayersInfo(): [any] {
        return this.playersInfo;
    }

    public setPlayersInfo(playersInfo): void {
        this.playersInfo = playersInfo;
    }
}
