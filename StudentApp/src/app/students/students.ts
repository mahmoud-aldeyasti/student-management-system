
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debug } from 'console';
import { Student } from './student/student';
import { StudentService } from '../../services/student.service';
import { studentModel } from './student/student.Model';

@Component({
  imports: [FormsModule, Student],
  selector: 'app-students',
  styleUrl: './students.css',
  templateUrl: './students.html',
})
export class Students  {
  @Input({required: true}) studentList: studentModel[] = [];

  constructor() {
    console.log('Students component constructor called');
    console.log(this.studentList);
  }



}
