import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FutureComponent } from './features/future/future.component';

const routes: Routes = [
  {path: '', component: FutureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
