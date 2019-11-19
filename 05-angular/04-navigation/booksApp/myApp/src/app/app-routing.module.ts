import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';

const enableTracing = true && !environment.production;

import * as fromAuthors from './authors';

const routes: Routes = [{

  path: '',
  redirectTo: 'authors',
  pathMatch: 'full',
},
{
  path: 'authors',
  children: [
  {
    path: '',
    component: fromAuthors.AuthorListComponent
  },
  {
    path: 'new',
    component: fromAuthors.AuthorNewComponent
  },
  {
    path: ':id',
    component: fromAuthors.AuthorDetailComponent
  },
  {
    path: ':id/edit',
    component: fromAuthors.AuthorEditComponent
  }
  ]
},
{
  path: '**',
  component: NotFoundComponent,
}];

@NgModule( {
  imports: [RouterModule.forRoot(routes, {enableTracing})],
  exports: [RouterModule],
})

export class AppRoutingModule {}
