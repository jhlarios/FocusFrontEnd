import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletePhotoComponent } from './confirm-delete-photo.component';

describe('ConfirmDeletePhotoComponent', () => {
  let component: ConfirmDeletePhotoComponent;
  let fixture: ComponentFixture<ConfirmDeletePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeletePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeletePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
