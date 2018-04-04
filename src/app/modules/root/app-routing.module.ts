import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { IntroComponent } from '../feature-modules/shared/components/intro/intro.component';
import { NotFoundComponent } from '../feature-modules/shared/components/not-found/not-found.component';

// services
import { AppCustomPreloader } from './services/app-preloading-strategy';

const routes: Routes = [
    {
        path: 'about',
        loadChildren: 'app/modules/feature-modules/lazy-modules/about/about.module#AboutModule'
    },
    {
        path: 'players',
        loadChildren: 'app/modules/feature-modules/preload-modules/play-ground/play-ground.module#PlayGroundModule',
        data: { preload: true }
    },
    // default path
    { path: '', component: IntroComponent },
    // wildcard. The router will select this route if the requested URL doesn't match any paths
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: AppCustomPreloader,
        // enableTracing: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
