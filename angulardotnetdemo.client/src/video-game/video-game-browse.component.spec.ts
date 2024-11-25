import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VideoGameBrowseComponent } from './video-game-browse.component';
import { VideoGameService } from './video-game.service';
import { of } from 'rxjs';
import { VideoGame } from './video-game.model';
import { ActivatedRoute } from '@angular/router';

describe('VideoGameListComponent', () => {
  let component: VideoGameBrowseComponent;
  let fixture: ComponentFixture<VideoGameBrowseComponent>;
  let videoGameService: jasmine.SpyObj<VideoGameService>;

  const mockVideoGames: VideoGame[] = [
    { id: 1, title: 'Game 1', genre: 'Action', platform: 'PC' },
    { id: 2, title: 'Game 2', genre: 'RPG', platform: 'PS5' },
  ];

  beforeEach(() => {
    const videoGameServiceSpy = jasmine.createSpyObj('VideoGameService', ['getGames']);
    videoGameServiceSpy.getGames.and.returnValue(of(mockVideoGames));

    // Mock for ActivatedRoute
    const mockActivatedRoute = {
        snapshot: { paramMap: {} }, // Mock for `ActivatedRoute.snapshot.paramMap.get`
    };

    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule, VideoGameBrowseComponent],
      providers: [{ provide: VideoGameService, useValue: videoGameServiceSpy }, { provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoGameBrowseComponent);
    component = fixture.componentInstance;
    videoGameService = TestBed.inject(VideoGameService) as jasmine.SpyObj<VideoGameService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load video games on init', () => {
    fixture.detectChanges(); // Trigger ngOnInit

    expect(videoGameService.getGames).toHaveBeenCalled();

    const videoGamesValue = component.videoGames();
    expect(videoGamesValue.length).toBe(2);
    expect(videoGamesValue).toEqual(mockVideoGames);
  });
});
