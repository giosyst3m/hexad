import { environment } from './../environments/environment';
// Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';

// Services
import { ServiceModule } from './services/service.module';

// Component
import { AppComponent } from './app.component';

// Rutas
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/app.reducer';
import { appEffects } from './store/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
