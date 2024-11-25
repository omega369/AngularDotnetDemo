import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoGame } from './video-game.model';

@Injectable({ providedIn: 'root' })
export class VideoGameService {
    private apiUrl = 'https://localhost:61959/api/videogame';

    constructor(private http: HttpClient) {}

    getGames(): Observable<VideoGame[]> {
        return this.http.get<VideoGame[]>(this.apiUrl);
    }

    getGame(id: number): Observable<VideoGame> {
        return this.http.get<VideoGame>(`${this.apiUrl}/${id}`);
    }

    updateGame(id: number, game: VideoGame): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, game);
    }
}
