import { PostCardComponent } from './post-card.component';
import { async, TestBed } from '@angular/core/testing';

describe('PostCard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostCardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PostCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
