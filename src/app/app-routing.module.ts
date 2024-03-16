import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldGroupsComponent } from './pages/old-groups/old-groups.component';

const routes: Routes = [
  { path: '', component: OldGroupsComponent },
  //{ path: 'scores', component: ScoreListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
