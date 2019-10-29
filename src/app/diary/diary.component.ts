import { Component, OnInit } from '@angular/core';
import { Diary } from './diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries:Diary[]=[
    {
      name: 'boyd',content:'catchup'
    }
  ]
  

  constructor() { }

  ngOnInit() {
  }


  saveDiary(diary:Diary){
    this.diaries.push(diary);
  }


}
