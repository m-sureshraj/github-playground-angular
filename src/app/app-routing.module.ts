import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';
import { IntroComponent } from './modules/shared/components/intro/intro.component';

// services
import { AppPreloadStrategy } from './services/app-route-preloading-strategy.service';

const modulePath = 'app/modules';
const routes: Routes = [
  {
    path: 'about',
    loadChildren: `${modulePath}/lazy/about/about.module#AboutModule`
  },
  // default path
  {
    path: '',
    children: [
      { path: '', component: IntroComponent },
      {
        path: 'players',
        loadChildren: `${modulePath}/preload/play-ground/play-ground.module#PlayGroundModule`,
        data: { preload: true }
      }
    ]
  },
  // wildcard. The router will select this route if the requested URL doesn't match any paths
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AppPreloadStrategy,
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
