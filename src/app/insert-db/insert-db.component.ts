import { Component,Input,input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestserviceService } from '../testservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insert-db',
  imports: [FormsModule],
  templateUrl: './insert-db.component.html',
  styleUrl: './insert-db.component.css'
})
export class InsertDBComponent {
  @Input() studentdata={Name:'',Age:0,Mark:0};
  constructor(private rest:TestserviceService,private router:Router){}
  
ngOnInit():void{

}
addstudentdata():void{
  this.rest.inserttab1(this.studentdata).subscribe((result)=>{
    this.router.navigate(['/AllDetails']);
  },(err)=>{
    console.log(err);
  });
}
}
