import { Component, inject, OnInit, signal } from '@angular/core';
import { Students } from './students/students';
import { StudentForm } from './student-form/student-form';
import { StudentService } from '../services/student.service';

@Component({
  imports: [StudentForm, Students],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('Student Registration');
  private studentService = inject(StudentService);

  // Expose the signal value directly
  get studentList() {
    return this.studentService.studentList();
  }

  ngOnInit() {
    this.studentService.loadAllStudents();
  }
}