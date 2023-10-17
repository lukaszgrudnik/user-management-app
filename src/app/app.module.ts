import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './users/user.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { HttpCoreInterceptor } from './core/http-core.interceptor';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, SpinnerComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCoreInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
