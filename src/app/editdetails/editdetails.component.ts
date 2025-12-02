import { Component,Input } from '@angular/core';
import { TestserviceService,tab1 } from '../testservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editdetails',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './editdetails.component.html',
  styleUrl: './editdetails.component.css'
})
export class EditdetailsComponent {
@Input() studentdata:any={Name:'',Age:0,Mark:0};
id:number=0;
constructor(public rest:TestserviceService,private route:ActivatedRoute,private router:Router){}
ngOnInit():void{
  var paramId=this.route.snapshot.paramMap.get("id");
  if(paramId!==null&&paramId!==undefined){
    this.id=+paramId;
  }
  this.rest.gettab(this.id).subscribe(
    (data:{})=>{this.studentdata=data;
});
}

updatepro():void{
  this.rest.updatetab(this.id,this.studentdata).subscribe((result)=>{
    this.router.navigate(['/AllDetails/']);
  },(err)=>{
    console.log(err);
  });
}
}
