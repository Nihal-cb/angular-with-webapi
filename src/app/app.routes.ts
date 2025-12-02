import { Routes } from '@angular/router';
import { InsertDBComponent } from './insert-db/insert-db.component';
import { SelectAllDetailsComponent } from './select-all-details/select-all-details.component';
import { SelectDetailsComponent } from './select-details/select-details.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';

export const routes: Routes = [
    {path:'',component:SelectAllDetailsComponent},
     {path:'ins',component:InsertDBComponent},
      {path:'AllDetails',component:SelectAllDetailsComponent},
      {path:'selectdetails/:id',component:SelectDetailsComponent},
      {path:'editdetails/:id',component:EditdetailsComponent}

];
