import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransportsPage } from './transports.page';

describe('TransportsPage', () => {
  let component: TransportsPage;
  let fixture: ComponentFixture<TransportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
