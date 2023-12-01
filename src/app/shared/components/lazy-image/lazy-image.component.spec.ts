import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  LazyImageComponent,
  NO_IMAGE_PLACEHOLDER,
} from './lazy-image.component';

describe('LazyImageComponent', () => {
  let component: LazyImageComponent;
  let fixture: ComponentFixture<LazyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyImageComponent, HttpClientTestingModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle image loaded', () => {
    component.onImageLoaded();
    expect(component.isLoading).toBe(false);
  });

  it('should handle error on load', () => {
    component.onErrorLoad();
    expect(component.imageRef.src).toBe(NO_IMAGE_PLACEHOLDER);
  });
});
