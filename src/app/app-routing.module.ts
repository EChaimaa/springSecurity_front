import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'register', pathMatch:'full'
  },
  {
    path:'login',
    loadChildren:()=>
    import('./modules/login/login-routing.module').then((m)=>m.LoginRoutingModule)
  },
  {
    path:'register',
    loadChildren:()=>
    import('./modules/register/register-routing.module').then((m)=>m.RegisterRoutingModule)
  },
  {
    path:'student',
    loadChildren:()=>
    import('./modules/student/student-routing.module').then((m)=>m.StudentRoutingModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
