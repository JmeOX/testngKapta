import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearcherComponent } from './components/searcher/searcher.component';

const routes: Routes = [

  {
    path: '**',
    component: SearcherComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
