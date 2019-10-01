import { FloatbarComponent } from './floatbar/floatbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { NavbarModule } from './navbar/navbar.module';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleDetailsComponent } from './module-details/module-details.component';
import { SafePipe } from './safe.pipe';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { AuthenticationModule } from './authentication/authentication.module';
import { DocumodeComponent } from './documode/documode.component';
import { MainComponent } from './main/main.component';
import { PresmodeComponent } from './presmode/presmode.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
// import { DocumodeModule } from './documode/documode.module';


@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    ModuleDetailsComponent,
    SafePipe,
    TopbarComponent,
    FloatbarComponent,
    DocumodeComponent,
    MainComponent,
    PresmodeComponent,
    AboutComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    CoreModule,
    NavbarModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    AuthenticationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
