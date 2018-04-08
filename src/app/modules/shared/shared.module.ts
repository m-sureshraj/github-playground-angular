import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import {
  IntroComponent,
  NotFoundComponent,
  LoadingComponent
} from './components';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    IntroComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  exports: [
    IntroComponent,
    NotFoundComponent,
    LoadingComponent,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
