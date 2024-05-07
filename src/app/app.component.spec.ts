import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.title = 'expected title'; // set the title
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const titleElement = compiled.querySelector('.title');
    if (titleElement) {
      // check if the element exists
      expect(titleElement.textContent).toContain('expected title');
    } else {
      fail('Element with class title not found');
    }
  });
});
