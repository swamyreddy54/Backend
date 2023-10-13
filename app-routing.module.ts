import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddingfileComponent } from './addingfile/addingfile.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'addingfile',component:AddingfileComponent},
  {path:'coverpage',component:CoverpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
