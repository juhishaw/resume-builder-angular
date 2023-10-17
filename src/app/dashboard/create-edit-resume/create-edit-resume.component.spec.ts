import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditResumeComponent } from './create-edit-resume.component';

describe('CreateEditResumeComponent', () => {
  let component: CreateEditResumeComponent;
  let fixture: ComponentFixture<CreateEditResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
