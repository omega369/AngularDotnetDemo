import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGameBrowseComponent } from '../video-game/video-game-browse.component';
import { VideoGameEditComponent } from '../video-game/video-game-edit.component';

const routes: Routes = [
  { path: '', component: VideoGameBrowseComponent },
  { path: 'edit/:id', component: VideoGameEditComponent },
  { path: 'edit', component: VideoGameEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
