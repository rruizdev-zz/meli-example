import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: 'items', component: ResultsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
