import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamagriOrder } from './samagri-order';

describe('SamagriOrder', () => {
  let component: SamagriOrder;
  let fixture: ComponentFixture<SamagriOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamagriOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamagriOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
