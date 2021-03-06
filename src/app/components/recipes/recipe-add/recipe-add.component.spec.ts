import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddComponent } from './recipe-add.component';

describe('RecipesComponent', () => {
  let component: RecipeAddComponent;
  let fixture: ComponentFixture<RecipeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
