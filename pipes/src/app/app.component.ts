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

 pipeForm= new FormGroup({
  title:new FormControl(),
  birthday:new FormControl()
 })
  




  getName(){
   this.name=this.pipeForm.get('title')?.value;
   // console.log(this.name)
  }
   getDate(){
    this.day= this.pipeForm.get('birthday')?.value;
    //console.log(this.day)

   }

}
