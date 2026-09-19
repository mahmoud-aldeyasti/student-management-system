import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { studentModel } from '../app/students/student/student.Model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http = inject(HttpClient);
  // Signal holding the state
  studentList = signal<studentModel[]>([]);

  // Observable stream to pass the selected student to the form
  private editStudentSource = new Subject<studentModel>();
  editStudent$ = this.editStudentSource.asObservable();

  // Triggered from row component
  setStudentForEdit(student: studentModel) {
    this.editStudentSource.next(student);
  }

  loadAllStudents() {
    this.http.get<studentModel[]>('https://student-management-system-lmzs.onrender.com/api/studentmaster').subscribe({
      next: (result) => {
        this.studentList.set(result);
      },
      error: (error) => {
        console.error('Error fetching students:', error);
      },
    });
  }

  DeleteStudent(id: number) {
    this.http.delete(`https://student-management-system-lmzs.onrender.com/api/studentmaster/${id}`).subscribe({
      next: () => {
        this.loadAllStudents(); // Refresh list after deletion
      },
      error: (error) => {
        console.error('Error deleting student:', error);
      },
    });
  }

  saveStudent(studentobj: studentModel) {
    this.http.post('https://student-management-system-lmzs.onrender.com/api/studentmaster', studentobj).subscribe({
      next: () => {
        this.loadAllStudents(); // Refresh list after save/update
      },
      error: (error) => {
        console.error('Error saving student:', error);
      },
    });
  }
}
