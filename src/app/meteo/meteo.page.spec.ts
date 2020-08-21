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
});
