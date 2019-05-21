import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedSkillsComponent } from './started-skills.component';

describe('StartedSkillsComponent', () => {
  let component: StartedSkillsComponent;
  let fixture: ComponentFixture<StartedSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartedSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
