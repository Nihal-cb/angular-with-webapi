import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAllDetailsComponent } from './select-all-details.component';

describe('SelectAllDetailsComponent', () => {
  let component: SelectAllDetailsComponent;
  let fixture: ComponentFixture<SelectAllDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAllDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
