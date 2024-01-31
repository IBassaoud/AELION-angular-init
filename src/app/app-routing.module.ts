import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'user',
      pathMatch: 'full'
    },
    {
      path: 'user',
      loadChildren: () => import('./user/user.module').then( (m) => m.UserModule)
    },
    // Wildcard routen must be the LAST route of a router
    {
      path:'**',
      component: PageNotFoundComponent,
      pathMatch: 'full'
    }
  ]
}
