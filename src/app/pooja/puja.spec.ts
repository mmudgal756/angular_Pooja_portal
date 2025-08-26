import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoojaService } from '../service/pooja.service';


describe('PoojaServices', () => {
  let component: PoojaService;
  let fixture: ComponentFixture<PoojaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoojaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoojaService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
