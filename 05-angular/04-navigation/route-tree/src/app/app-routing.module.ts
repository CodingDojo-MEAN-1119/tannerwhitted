import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { TopComponentComponent } from './top-component/top-component.component';
import { MidComponentComponent } from './mid-component/mid-component.component';

const enableTracing = true && !environment.production;

// import * as fromAuthors from './authors';

const routes: Routes = [{

  path: '',
  pathMatch: 'full',
  component: TopComponentComponent,
  children: [
    {
      path: 'second',
      component: MidComponentComponent
    }
  ]
}];

@NgModule( {
  imports: [RouterModule.forRoot(routes, {enableTracing})],
  exports: [RouterModule],
})

export class AppRoutingModule {}
