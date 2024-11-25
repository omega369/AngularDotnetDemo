import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { VideoGameService } from './video-game.service';
import { VideoGame } from './video-game.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-browse',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
        @for (game of videoGames(); track game.id) { 
            <div class="card my-2">
                <div class="card-body">
                    <h5 class="card-title">{{ game.title }}</h5>
                    <p class="card-text">Genre: {{ game.genre }} | Platform: {{ game.platform }}</p>
                    <a [routerLink]="['/edit', game.id]" class="btn btn-primary btn-sm">Edit</a>
                </div>
            </div>
        }
    `,
})
export class VideoGameBrowseComponent implements OnInit {
    // use a signal here for learning purposes
    videoGames: WritableSignal<VideoGame[]> = signal([]);

    constructor(private gameService: VideoGameService) {}

    ngOnInit() {
        this.gameService.getGames().subscribe((data) => (this.videoGames.set(data)));
    }
}
