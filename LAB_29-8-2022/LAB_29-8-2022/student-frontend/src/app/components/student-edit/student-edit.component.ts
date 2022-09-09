import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formbBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.studentService.getStudent(this.getId).subscribe(res => {
      this.updateForm.setValue({
        studentid: res['studentid'],
        name: res['name'],
        major: res['major']
      })
    })

    this.updateForm = this.formbBuilder.group({
      studentid: [''],
      name: [''],
      major: ['']
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.studentService.updateStudent(this.getId, this.updateForm.value).subscribe(() => {
      console.log('Data updated successfully');
      this.ngZone.run(() => this.router.navigateByUrl('/student'))
    }, (err) => {
      console.log(err);
    })
  }

}
