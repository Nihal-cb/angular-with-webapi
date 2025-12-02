import { Component } from '@angular/core';
import { TestserviceService,tab1 } from '../testservice.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule,UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-select-details',
  imports: [CommonModule,UpperCasePipe,RouterLink],
  templateUrl: './select-details.component.html',
  styleUrl: './select-details.component.css'
})
export class SelectDetailsComponent {
student:tab1 | undefined;
id:number=0;
constructor(public rest:TestserviceService,private route:ActivatedRoute,private router:Router){}
ngOnInit():void{
  var paramId=this.route.snapshot.paramMap.get("id");
  if(paramId!==null&&paramId!==undefined){
    this.id=+paramId;
  }
  this.rest.gettab(this.id).subscribe(
    (data:tab1)=>this.student={...data}
  );
}

}
