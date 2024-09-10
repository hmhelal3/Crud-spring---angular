import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAuthorComponent } from './get-all-author.component';

describe('GetAllAuthorComponent', () => {
  let component: GetAllAuthorComponent;
  let fixture: ComponentFixture<GetAllAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllAuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
