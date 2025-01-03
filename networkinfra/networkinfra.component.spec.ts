import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkinfraComponent } from './networkinfra.component';

describe('NetworkinfraComponent', () => {
  let component: NetworkinfraComponent;
  let fixture: ComponentFixture<NetworkinfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkinfraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkinfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
