import { Component } from '@angular/core';
import { TestserviceService,tab1 } from '../testservice.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-all-details',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './select-all-details.component.html',
  styleUrl: './select-all-details.component.css'
})
export class SelectAllDetailsComponent {
getdata:tab1[]=[];
constructor(public details:TestserviceService,private router:Router){}
ngOnInit():void{
  this.getalldetails();
}
getalldetails():void{
  this.details.getalltabs().subscribe((resp:any)=>{
    this.getdata=resp;
  })
}


delete(id:number):void{
  this.details.deletetab(id).subscribe(()=>{
    this.getalldetails();
  },(err)=>{
    console.log(err);
  });
}
}
