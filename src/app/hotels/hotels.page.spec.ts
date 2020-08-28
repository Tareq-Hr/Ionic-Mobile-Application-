import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelsPage } from './hotels.page';

describe('HotelsPage', () => {
  let component: HotelsPage;
  let fixture: ComponentFixture<HotelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
