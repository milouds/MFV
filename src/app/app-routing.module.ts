import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guards';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'rvente',loadChildren:()=>import('./rvente/rvente.module').then(m=>m.RventeModule),
   canActivate:[AuthGuard]},
  {path:'rcomf',loadChildren:()=>import('./rcomf/rcomf.module').then(m=>m.RcomfModule)},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
