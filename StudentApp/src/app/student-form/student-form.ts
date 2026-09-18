import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { studentModel } from '../students/student/student.Model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  styleUrl: './student-form.css',
  templateUrl: './student-form.html',
})
export class StudentForm implements OnInit, OnDestroy {
  studentobj: studentModel = {
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

  private studentservice = inject(StudentService);
  private sub!: Subscription;

  ngOnInit() {
    // Listen for row edit clicks cleanly
    this.sub = this.studentservice.editStudent$.subscribe((res) => {
      this.studentobj = { ...res }; // Populate form with selected student data
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  saveStudent() {
    this.studentservice.saveStudent(this.studentobj);
    this.resetForm();
  }

  resetForm() {
    this.studentobj = {
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
  }
}