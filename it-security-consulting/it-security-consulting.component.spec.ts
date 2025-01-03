import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSecurityConsultingComponent } from './it-security-consulting.component';

describe('ItSecurityConsultingComponent', () => {
  let component: ItSecurityConsultingComponent;
  let fixture: ComponentFixture<ItSecurityConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItSecurityConsultingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItSecurityConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
