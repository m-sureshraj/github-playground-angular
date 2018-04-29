import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';

// custom modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';

// custom services
import { AppPreloadStrategy } from './services/app-route-preloading-strategy.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AppPreloadStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
