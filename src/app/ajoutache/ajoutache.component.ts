import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajoutache',
  templateUrl: './ajoutache.component.html',
  styleUrls: ['./ajoutache.component.css']
})
export class AjoutacheComponent implements OnInit{
  taskArray = [{ taskName: '0', isCompleted: false, index:0 }];

  constructor () {}

  ngOnInit(): void {
    
  }

    onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
      index: +1
    })

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
