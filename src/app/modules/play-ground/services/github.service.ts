import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Observable } from "rxjs/Rx";

@Injectable()
export class GitHubService {
    private baseUrl: string = 'https://api.github.com';

    constructor(private http: HttpClient) {}

    private getUserInfo(userName: string): Promise<Object> {
        const url = `${this.baseUrl}/users/${userName}`;

        return this.http.get(url).toPromise();
    }

    public getPlayersInfo(players: [string]): Promise<Object[]> {
        return Promise.all(players.map(userName => this.getUserInfo(userName)))
            .then(playersInfo => playersInfo)
            .catch((err: any) => {
                return Promise.reject(err);
            });
    }

    // hey github give me the user latest 20 public repos
    private fetchUserRepositories(userName: string): Observable<Object> {
        const url = `${this.baseUrl}/users/${userName}/repos`;

        return this.http.get(url, {
            params: {
                type: 'owner',
                sort: 'created',
                direction: 'desc',
                per_page: '20'
            }
        });
    }

    public getPlayersRepositories(players): Observable<Object> {
        return forkJoin(
          players.map(player => this.fetchUserRepositories(player.login))
        );
    }
}
