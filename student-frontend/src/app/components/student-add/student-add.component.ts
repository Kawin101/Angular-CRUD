import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  studentForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private studentService: StudentService,
  ) {
    this.studentForm = this.formBuilder.group({
      studentid: [''],
      name: [''],
      major: ['']
    });
  }

  ngOnInit(): void {
  }

  // onSubmit(): any {
  //   let student = new Student();
  //   student.name = this.studentForm.controls['name'].value;
  //   student.major = this.studentForm.controls['major'].value;
  //   student.studentid = this.studentForm.controls['studentid'].value;

  //   this.studentService.createNewStudent(student).subscribe({
  //     next: res => {
  //       this.router.navigateByUrl('/student');
  //     },
  //     error: err => { }
  //   });
  // }

  onSubmit(): any {
    this.studentService.createNewStudent(this.studentForm.value)
    .subscribe(() => {
      console.log("Data created successfully");
      this.ngZone.run(() => this.router.navigateByUrl('/student'))
    }, (err) => {
      console.log(err);
    }) 
  }
}
