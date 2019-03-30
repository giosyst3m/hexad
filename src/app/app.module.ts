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
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
