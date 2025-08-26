import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalMain } from './portal-main';

describe('PortalMain', () => {
  let component: PortalMain;
  let fixture: ComponentFixture<PortalMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
