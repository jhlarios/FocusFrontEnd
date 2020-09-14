import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletePhotoComponent } from './confirm-delete-photo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

describe('ConfirmDeletePhotoComponent', () => {
  let component: ConfirmDeletePhotoComponent;
  let fixture: ComponentFixture<ConfirmDeletePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule
        ,ReactiveFormsModule
        ,FormsModule
      ],
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
