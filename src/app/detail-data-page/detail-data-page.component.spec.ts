import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDataPageComponent } from './detail-data-page.component';

describe('DetailDataPageComponent', () => {
  let component: DetailDataPageComponent;
  let fixture: ComponentFixture<DetailDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
