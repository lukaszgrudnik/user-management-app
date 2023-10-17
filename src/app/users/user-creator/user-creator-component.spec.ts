import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UserCreatorComponent } from './user-creator.component';
import { HttpClientModule } from '@angular/common/http';

describe('CreateUserComponent', () => {
  let component: UserCreatorComponent;
  let fixture: ComponentFixture<UserCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCreatorComponent],
      imports: [FormsModule, HttpClientModule], // Import any required modules
    }).compileComponents();

    fixture = TestBed.createComponent(UserCreatorComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with all required fields', () => {
    const form = fixture.debugElement.query(By.css('form'));

    expect(form).toBeTruthy();

    const inputs = fixture.debugElement.queryAll(By.css('input[required]'));
    expect(inputs.length).toBe(8);
  });

  it('should have a "Create" button', () => {
    const button = fixture.debugElement.query(By.css('button'));

    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent).toContain('Create');
  });
});
