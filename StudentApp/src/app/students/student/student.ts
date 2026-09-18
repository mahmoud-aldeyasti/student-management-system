import { Component, inject, Input } from '@angular/core';
import { type studentModel } from './student.Model';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'tr[app-student]',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  @Input({ required: true }) student: studentModel = {
    studentId: 0,
    studName: '',
    mobileNo: '',
    email: '',
    city: '',
    state: '',
    pincode: '',
    adressline1: '',
    addressline2: '',
  };
  @Input() index: number = 0;
  
  private studentService = inject(StudentService);


  onEdit() {
    // Pass a copy of the student object to the form so typing doesn't mutate the table row instantly
    this.studentService.setStudentForEdit({ ...this.student });
  }


  onDelete() {
    // Native confirmation dialog matching quick CRUD flows
    if (confirm(`Are you sure you want to delete ${this.student.studName}?`)) {
      this.studentService.DeleteStudent(this.student.studentId);
    }
  }
}