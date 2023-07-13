import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Courses } from '../model/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private httpClient: HttpClient) { }

  list(): Courses[] {
    return [
      { _id: "21", name: 'Angular-CRUD', category:'front-end'},
      { _id: '2', name: 'Spring', category: 'back-end'}
    ]
  }
}
