import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataPageComponent } from './edit-data-page.component';

describe('EditDataPageComponent', () => {
  let component: EditDataPageComponent;
  let fixture: ComponentFixture<EditDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
