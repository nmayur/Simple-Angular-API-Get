import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Components Import
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Services Import

import { TableService } from './services/table.service';
import { CardService } from './services/card.service';

const appRoutes: Routes = [
 {path: '', component: DashboardComponent},
 { path: 'table', component: TableComponent },
 { path: 'cards', component: CardsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    CardsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true } ),
    DataTablesModule,
    HttpModule
  ],
  providers: [
    TableService,
    CardService
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
