import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoGame } from './video-game.model';

@Injectable({ providedIn: 'root' })
export class VideoGameService {
    private apiUrl = 'https://localhost:50606/api/videogame';

    constructor(private http: HttpClient) {}

    getGames(): Observable<VideoGame[]> {
        return this.http.get<VideoGame[]>(this.apiUrl);
    }

    getGame(id: number): Observable<VideoGame> {
        return this.http.get<VideoGame>(`${this.apiUrl}/${id}`);
    }

    addGame(game: VideoGame): Observable<VideoGame> {
        return this.http.post<VideoGame>(this.apiUrl, game);
    }

    updateGame(id: number, game: VideoGame): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, game);
    }

    deleteGame(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
