import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataPageComponent } from './add-data-page.component';

describe('AddDataPageComponent', () => {
  let component: AddDataPageComponent;
  let fixture: ComponentFixture<AddDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
