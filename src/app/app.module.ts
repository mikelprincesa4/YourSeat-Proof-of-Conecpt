import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SummaryComponent } from './summary/summary.component';
import { PerformanceComponent } from './performance/performance.component';
import { ClientsComponent } from './clients/clients.component';
import { RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SummaryComponent,
    PerformanceComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: SummaryComponent},
      {path: 'summary', component: SummaryComponent},
      {path: 'performance', component: PerformanceComponent},
      {path: 'clients', component: ClientsComponent},
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
