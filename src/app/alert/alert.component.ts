import { Component, OnInit } from '@angular/core';
import { AlertService, alertType } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor( private _as:AlertService ) { }

  show:Boolean = false
  content:String="";
  heading:String="Warning" 

  ngOnInit(): void {
    this._as.alert.subscribe((d)=>{
      this.show = d.show
      this.content = d.content
      this.heading = d.heading
    })
  }

  Cancle(){
    this._as.close(false)
  }
  Okay(){
    this._as.close(true)
  }

}
