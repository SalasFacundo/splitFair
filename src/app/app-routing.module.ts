import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGroupComponent } from './pages/new-group/new-group.component';

const routes: Routes = [
  { path: '', component: NewGroupComponent },
  //{ path: 'scores', component: ScoreListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
