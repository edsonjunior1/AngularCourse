import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, ContentChild, ElementRef, ViewChildren, QueryList, ContentChildren, AfterContentInit, TemplateRef } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() course: Course = { id: 0, category: '', description: '', iconUrl: '', longDescription: '', lessonsCount: 0 };
  @Input() cardIndex: number = 0;
  @Output() courseSelected = new EventEmitter<Course>();

  //Adicionando a referencia do template noImage
  @Input()
  noImageTemplate!: TemplateRef<any>;

  @ContentChild(CourseImageComponent, { read: ElementRef })
  image!: ElementRef;

  @ContentChildren(CourseImageComponent)
  images!: QueryList<CourseImageComponent>

  // In order to see the query results, we need to use @ContentChild, so that we can only inside the ng-scontent
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    //console.log(this.image);
  }

  ngAfterContentInit(): void {
    //console.log(this.images);
  }

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }

  isImageAvailable() {
    return this.course && this.course.iconUrl
  }

  cardClasses(): any {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }


}
