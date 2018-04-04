import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';

// custom modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../feature-modules/shared/shared.module';

// custom services
import { AppCustomPreloader } from './services/app-preloading-strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [AppCustomPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }

// declarations (where we register components)
// * There can be only one owner for a declared component, the module which is belongs
//   to. If that module exports it's components to outside world, then importing that
//   module we get access to is registered components.

// providers (where we register services)
// * if a module register a service then it will automatically available to the other modules.
