import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTablesComponent } from './simple-tables.component';

describe('SimpleTablesComponent', () => {
  let component: SimpleTablesComponent;
  let fixture: ComponentFixture<SimpleTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
