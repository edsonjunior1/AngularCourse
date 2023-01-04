import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(HighlightedDirective, { read: HighlightedDirective }) highlighted!: HighlightedDirective;

  @ViewChild('container') containerDiv!: ElementRef;

  //Query List dos elementos, elementos do DOM, assim como o viewchild não pega outros componentes
  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards!: QueryList<ElementRef>;

  courses = COURSES;
  course = COURSES[0];
  _id: number = this.course.lenght;


  constructor() { }

  ngAfterViewInit(): void {
    //Only local in component
    this.containerDiv.nativeElement;

    console.log('Diretiva highlighted ',this.highlighted);
  }

  onToggle(eventHightlighted: boolean): void {
    console.log('Output disparado');
  }


  onCourseEmit(course: Course) {
    console.log(`Objeto destructured which the description is: ${course.description}`);
    // this.elementReference.nativeElement.className = 'alert alert-success';
  }

  onCourseEmited() {

    for (var i = 0; i < this.course.lenght; i++) {
      this._id = this._id + 1;
    }

    this.courses.push({
      id: this._id,
      description: "New Course Added!",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: 'INTERMEDIATE',
      lessonsCount: 10
    });
  }
}
