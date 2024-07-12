import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { MousesComponent } from './mouses/mouses.component';

const routes: Routes = [
  {path:'mouses',component: MousesComponent},
  {path:'keyboards',component: KeyboardsComponent},
  {path: '', redirectTo: 'keyboards', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
