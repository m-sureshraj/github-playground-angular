import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';

// components
import {
  IntroComponent,
  NotFoundComponent,
  LoadingComponent,
  HomeComponent,
  AvatarComponent
} from './components';

// services
import {
  LastRouteDetailsService
} from './services/last-route-details.services';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    IconsModule
  ],
  declarations: [
    IntroComponent,
    NotFoundComponent,
    LoadingComponent,
    HomeComponent,
    AvatarComponent
  ],
  exports: [
    IntroComponent,
    NotFoundComponent,
    LoadingComponent,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AvatarComponent,
    IconsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LastRouteDetailsService]
    };
  }
}
