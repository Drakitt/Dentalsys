import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentitionComponent } from './dentition.component';

describe('DentitionComponent', () => {
  let component: DentitionComponent;
  let fixture: ComponentFixture<DentitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DentitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
