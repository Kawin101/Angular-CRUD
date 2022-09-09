import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  AllStudent:any = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe(res => {
      console.log(res)
      this.AllStudent = res;
    })
    
  }
  
  delete(id:any, i:any) {
    console.log(id)
    if (window.)
  }

}
