import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert:Subject<alertType> = new Subject;

  constructor() { }

  open(str:string,str1:string="Warning"){
    let obj:alertType = {
      selection:false,
      show:true,
      content:str,
      heading:str1
    }
    this.alert.next(obj)
  }
  close(selection:Boolean){
    let obj:alertType = {
      selection:selection,
      show:false,
      content:"",
      heading:""
    }
    this.alert.next(obj)
  }
}

export interface alertType{
  selection:Boolean
  show:Boolean
  content:String
  heading:String
}
