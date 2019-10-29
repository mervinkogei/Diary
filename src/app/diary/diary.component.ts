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
      name: 'boyd',content:'catchup',votes:0
    }
  ]
  

  constructor() { }

  ngOnInit() {
  }


  saveDiary(diary:Diary){
    this.diaries.push(diary);
  }

  del(index){
    this.diaries.splice(index);
  }

  voting(index:number){
    this.diaries[index].votes +=1;
  }

  devoting(index:number){
    this.diaries[index].votes -= 1;
    if(this.diaries[index].votes<0){
      this.diaries[index].votes=0;
    }
  }


}
