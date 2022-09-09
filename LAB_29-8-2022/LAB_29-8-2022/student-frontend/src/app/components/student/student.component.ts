import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['studentid', 'name', 'major', 'action'];
  dataSource!: Student[];
  
  constructor(
    private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadDataFromAPI();
  }
  loadDataFromAPI() {
    this.studentService.getAllStudent().subscribe({
      next: data => {
        this.dataSource = data as Student[];
        console.log(this.dataSource);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  onClickViewButton(id: number) {
    console.log("View click", id);
    this.router.navigateByUrl('/student/' + id);
  }
  onClickEditButton(id: number) {
    console.log("Edit click", id);
    this.router.navigateByUrl('/student-edit/' + id);
  }
  onClickDeleteButton(id: number) {
    console.log("Delete click", id);
    this.studentService.deleteStudent(id).subscribe({
      next: data => {
        // this.dataSource = this.dataSource.filter(item => item.id !== id);
        this.loadDataFromAPI();
      },
      error: err => {
        console.log(err.message);
      }
    });
  }

}
