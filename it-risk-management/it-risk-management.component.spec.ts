import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRiskManagementComponent } from './it-risk-management.component';

describe('ItRiskManagementComponent', () => {
  let component: ItRiskManagementComponent;
  let fixture: ComponentFixture<ItRiskManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItRiskManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItRiskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
