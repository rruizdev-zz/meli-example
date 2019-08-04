import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';


const routes: Routes = [
  { path: 'search/:query', component: ResultsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
