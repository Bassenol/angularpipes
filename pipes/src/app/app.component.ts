import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
   name:string="";
   day:any;
   money:number=0;
   height:number=0;
   miles:number=0;

 pipeForm= new FormGroup({
  title:new FormControl(),
  birthday:new FormControl(),
  money: new FormControl(),
  height:new FormControl(),
  miles: new FormControl()
  
 })



  getName(){
   this.name=this.pipeForm.get('title')?.value;
   // console.log(this.name)
  }
   getDate(){
    this.day= this.pipeForm.get('birthday')?.value;
    //console.log(this.day)
   }

   getMoney(){
    this.money= parseFloat(this.pipeForm.get('money')?.value);
   }
   getHeight(){
    this.height= parseFloat(this.pipeForm.get('height')?.value);
   }

   getMiles(){
    this.miles= parseFloat(this.pipeForm.get('miles')?.value);
   }

}
