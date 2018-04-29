import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  NotFoundComponent,
  IntroComponent
} from '@shared/components';

// services
import { AppPreloadStrategy } from './services/app-route-preloading-strategy.service';

const modulePath = 'app/modules';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: IntroComponent },
      {
        path: 'players',
        loadChildren: `${modulePath}/play-ground/play-ground.module`,
        data: { preload: true }
      },
      {
        path: 'about',
        loadChildren: `${modulePath}/about/about.module`
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AppPreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
