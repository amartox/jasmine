import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PostComponent } from './postComponent';

describe('Unit Test: Post Component', () => {
  let component: PostComponent;
  //only once
  beforeAll(() => {});
  afterAll(() => {});

  //everytime for a spec
  beforeEach(() => {
    //Arrange
    component = new PostComponent();
    component.totalLikes = 3;
  });
  afterEach(() => {});

  it('should increment the likes', () => {
    //act
    component.like();

    //Assert
    expect(component.totalLikes).toBe(4);
  });
  it('should decrement the likes', () => {
    component.dislike();

    expect(component?.totalLikes).toBe(2);
  });
  it('should decrement the likes if the totalLikes is not 0', () => {
    component.totalLikes = 0;
    component.dislike();

    expect(component.totalLikes).not.toBe(-1);
  });
});

describe('Integration Test: Post Component', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display global total likes', () => {
    let debugElement = fixture.debugElement.query(By.css('.globalTotalLikes'));
    let htmlElement: HTMLElement = debugElement.nativeElement;
    expect(htmlElement.innerText).toContain('0');
  });
});
