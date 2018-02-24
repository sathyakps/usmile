import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
  
})
export class ImageComponent implements OnInit {
  public sliders: Array<any> = [];
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
  constructor() { 

       
    this.sliders.push({
      imagePath: './assets/images/tony.jpg',
      label: 'First slide label',
      text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  }, {
      imagePath: './assets/images/piz.jpg',
      label: 'Second slide label',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }, {
      imagePath: './assets/images/meat.jpg',
      label: 'Third slide label',
      text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  },
  {
    imagePath: './assets/images/dosa.jpg',
    label: 'Third slide label',
    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
}
);
  }

  ngOnInit() {
  }

}
