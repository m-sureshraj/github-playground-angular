import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from "rxjs/Rx";
// import { forkJoin } from "rxjs/observable/forkJoin";
// import 'rxjs/add/operator/catch';

@Injectable()
export class GitHubService {
    private baseUrl: string = 'https://api.github.com';

    constructor(private http: HttpClient) {}

    private getUserInfo(userName: string): Promise<Object> {
        const url = `${this.baseUrl}/users/${userName}`;

        return this.http.get(url).toPromise();
    }

    public getPlayersInfo(players: [string]): Promise<Object[]> {
        if (!players) return Promise.reject({ status: 'Invalid players' });

        return Promise.all(players.map(userName => this.getUserInfo(userName)))
            .then(playersInfo => playersInfo)
            .catch((err: any) => {
                return Promise.reject(err);
            });

        // todo: convert promise way to Observable
        // if (!players) return Observable.throw('Invalid players');

        // forkJoin is equal to Promise.all
        // return forkJoin(players.map(userName => this.getUserInfo(userName)))
        //     .catch(err => {
        //         console.error(err);
        //         return Observable.throw(err);
        //     });
    }
}
