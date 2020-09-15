import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoregisterComponent } from './photoregister.component';

describe('PhotoregisterComponent', () => {
  let component: PhotoregisterComponent;
  let fixture: ComponentFixture<PhotoregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
