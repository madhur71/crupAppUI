import { Component, OnInit } from '@angular/core';
import { TosterService } from './toster.service';

@Component({
  selector: 'app-toster',
  templateUrl: './toster.component.html',
  styleUrls: ['./toster.component.css']
})
export class TosterComponent implements OnInit {

  constructor(public toster:TosterService) { }

  ngOnInit(): void {

  }


 
}
