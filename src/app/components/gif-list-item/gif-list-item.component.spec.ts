import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifListItemComponent } from './gif-list-item.component';

describe('GifListItemComponent', () => {
  let component: GifListItemComponent;
  let fixture: ComponentFixture<GifListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
