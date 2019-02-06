import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListComponent ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('todoList should be empty at start', () => {
    const fixture = TestBed.createComponent(ToDoListComponent);
    fixture.detectChanges();
    //const el = fixture.nativeElement.querySelector('p');
    const compiled = fixture.debugElement.nativeElement;
    //expect(el.innerText).toContain('');
    expect(compiled.querySelector('p').textContent).toContain(' ');
  });
  it('function add() should work correctly', () => {
    const fixture = TestBed.createComponent(ToDoListComponent);
    const element = fixture.nativeElement.querySelector('#todo-add');
    element.triggerEventHandler("click", null);
    fixture.detectChanges();
  });
});
