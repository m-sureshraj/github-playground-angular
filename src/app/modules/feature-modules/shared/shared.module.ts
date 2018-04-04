import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import { IntroComponent } from './components/intro/intro.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [IntroComponent, NotFoundComponent, LoadingComponent],
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
