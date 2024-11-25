import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VideoGameService } from './video-game.service';
import { VideoGame } from './video-game.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-edit',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    template: `
        <form (ngSubmit)="saveGame()">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input id="title" [(ngModel)]="game.title" name="title" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="genre" class="form-label">Genre</label>
                <input id="genre" [(ngModel)]="game.genre" name="genre" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="platform" class="form-label">Platform</label>
                <input id="platform" [(ngModel)]="game.platform" name="platform" class="form-control" />
            </div>
            <button class="btn btn-primary">Save</button>
            <a [routerLink]="['/']" class="btn btn-secondary ms-2">
      Cancel
    </a>
        </form>
    `,
})
export class VideoGameEditComponent implements OnInit {
    game: VideoGame = { title: '', genre: '', platform: '' };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private gameService: VideoGameService
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        if (id) {
            this.gameService.getGame(+id).subscribe((data) => (this.game = data));
        }
    }

    saveGame() {
        if (this.game.id) {
            this.gameService.updateGame(this.game.id, this.game).subscribe(() => this.router.navigate(['/']));
        } else {
            this.gameService.addGame(this.game).subscribe(() => this.router.navigate(['/']));
        }
    }
}
