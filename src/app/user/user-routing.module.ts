import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forChild(UserRoutingModule.routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
  public static routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      pathMatch: 'full'
    },
  ];
 }
