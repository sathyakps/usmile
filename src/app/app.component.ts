import { Component } from '@angular/core';
import * as jQuery from 'jquery';
import 'hammerjs';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'U-Smile';
  hiseeve(){
    $('.navbar-collapse').collapse('hide');

  }
}
