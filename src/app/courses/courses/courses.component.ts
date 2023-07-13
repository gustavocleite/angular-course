import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Courses } from '../model/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Courses[] = [];
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }
  ngOnInit(): void{
  }
}
