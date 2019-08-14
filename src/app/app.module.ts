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


@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    ModuleDetailsComponent,
    SafePipe,
    TopbarComponent,
    FloatbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    CoreModule,
    NavbarModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot()

    // RouterModule.forRoot([
    //   { path: 'imbue', component: ModuleListComponent},
    //   { path: 'imbue/:materialId', component: ModuleDetailsComponent},
    // ])
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
