import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Diary } from '../diary/diary';




@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  @Output() newDiary= new EventEmitter<Diary>();
  
  constructor() { }

  ngOnInit() {
  }


  formDiary = new Diary('1','1');


  onSubmit(){
    this.newDiary.emit(this.formDiary);
  }


}
