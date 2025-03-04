import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieComponent } from './recipie.component';

describe('RecipieComponent', () => {
  let component: RecipieComponent;
  let fixture: ComponentFixture<RecipieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
