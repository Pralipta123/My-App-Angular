import { Routes } from '@angular/router';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { DeleteUsersComponent } from './users/delete-users/delete-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';

export const routes: Routes = [
   
    {path:'user',
        children:[
                {path:'',component:ListUsersComponent},
                {path:'list',component:ListUsersComponent},
                {path:'view/:id',component:ViewUsersComponent},
                {path:'create',component:AddUsersComponent},
                {path:'delete/:id',component:DeleteUsersComponent},
                {path:'edit/:id',component:EditUsersComponent},
              ]
    }
];
