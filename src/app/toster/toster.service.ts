import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TosterService {

  constructor() { }

  title = 'crupApp';
  messege = ""
  showMessegeBool:Boolean = false;
  hideMessege:any;
  time = 10;
  width = "100%"
  effect = "width 10s"
  color = "success"
  showMessege(str:any,color = "success"){
    this.color = color
    this.showMessegeBool = true
    this.messege = str;
    this.time = 10;
    this.effect = "width 10s";
    this.width = "100%";
    this.hideMessege = setInterval(()=>{
      this.width = "0%";
      this.time = this.time - 1;
      console.log(this.time)
      if(this.time == 0){
        this.close()
      }
    },1000)
  }

  startTimmer(){
    this.showMessege(this.messege)
  }

  resetTimmer(){
    this.effect = "";
    this.width = "100%"
    clearInterval(this.hideMessege)
  }

  close(){
    this.showMessegeBool = false;
    this.messege = "";
    this.effect = "";
    this.width = "100%"
    clearInterval(this.hideMessege)
  }


}
