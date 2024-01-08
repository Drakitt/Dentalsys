import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbpoardComponent } from './dashbpoard.component';

describe('DashbpoardComponent', () => {
  let component: DashbpoardComponent;
  let fixture: ComponentFixture<DashbpoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbpoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbpoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
