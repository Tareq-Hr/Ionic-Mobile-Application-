import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResaturantsPage } from './resaturants.page';

describe('ResaturantsPage', () => {
  let component: ResaturantsPage;
  let fixture: ComponentFixture<ResaturantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaturantsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResaturantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
