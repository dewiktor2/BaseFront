import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersRolesComponent } from './users-roles.component';

const routes: Routes = [ {
  path: '',
  component: UsersRolesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRolesRoutingModule {}
