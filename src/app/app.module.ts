import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './users/user.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './common/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, SpinnerComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
