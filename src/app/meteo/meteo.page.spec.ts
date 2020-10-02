import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MeteoPage } from './meteo.page';
describe('MeteoPage', () => {
  let component: MeteoPage;
  let fixture: ComponentFixture<MeteoPage>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(MeteoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    MeteoPage = fixture.nativeElement;
    const items = MeteoPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });
});