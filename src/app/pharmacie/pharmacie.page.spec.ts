import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmaciePage } from './pharmacie.page';

describe('PharmaciePage', () => {
  let component: PharmaciePage;
  let fixture: ComponentFixture<PharmaciePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmaciePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
