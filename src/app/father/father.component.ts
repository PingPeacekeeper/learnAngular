import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {
  @ViewChild(`mark`) childSon:any;
  msgForSon='msg from father';
  value=10;

  logData(){
    console.log(this.childSon.data);
  }
  ngAfterViewInit(){
    console.log(this.childSon.data);
  }

  testMark(text:string){
    console.log(text);
  }

}
