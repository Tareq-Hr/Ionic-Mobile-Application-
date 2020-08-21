import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListePlacesPage } from './liste-places.page';

describe('ListePlacesPage', () => {
  let component: ListePlacesPage;
  let fixture: ComponentFixture<ListePlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePlacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListePlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
