import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'reactive-forms'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.profileForm.patchValue({
      firstName: 456
    });
    const app = fixture.debugElement.componentInstance;
    var a = (fixture.componentInstance.profileForm.get('firstName') as FormControl).value;
    console.log('13123 ', fixture.componentInstance.profileForm.get('firstName').errors);
    expect(a).toEqual(456);
    expect(fixture.componentInstance.profileForm.get('firstName').hasError('pattern')).toBeTruthy();
    expect(app.title).toEqual('reactive-forms');
  }));

});
