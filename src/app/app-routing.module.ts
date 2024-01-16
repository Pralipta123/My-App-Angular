import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




// Define the routes for  application
const routes: Routes = [{ path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }


];

// Decorate the module with @NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
