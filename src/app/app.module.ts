import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationComponent,
    IndexComponent,
    NotFoundComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }