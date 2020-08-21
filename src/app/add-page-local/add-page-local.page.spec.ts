import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPageLocalPage } from './add-page-local.page';

describe('AddPageLocalPage', () => {
  let component: AddPageLocalPage;
  let fixture: ComponentFixture<AddPageLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPageLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPageLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
