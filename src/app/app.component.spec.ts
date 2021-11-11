// app.component.spec.ts
import { TestBed, async } from '@angular/core/testing'; // 1
import { AppComponent } from './app.component';

describe('AppComponent', () => { // 2
    beforeEach(async(() => { // 3
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => { // 4
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-component-testing'`, () => {  //5
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('angular-component-testing');
    });

    it('should render title in a h1 tag', () => { //6
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-component-testing!');
    });
});