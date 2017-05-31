import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2GoogleChartsComponent } from './ng2-google-charts.component';

describe('Ng2GoogleChartsComponent', () => {
  let component: Ng2GoogleChartsComponent;
  let fixture: ComponentFixture<Ng2GoogleChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2GoogleChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2GoogleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
