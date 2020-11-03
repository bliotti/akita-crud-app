import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CourseState, CourseStore } from './course.store';

@Injectable({ providedIn: 'root' })
export class CourseQuery extends QueryEntity<CourseState> {
  selectAreCourseLoaded$ = this.select((s) => {
    return s.areCoursesLoaded;
  });

  constructor(protected store: CourseStore) {
    super(store);
  }
}
