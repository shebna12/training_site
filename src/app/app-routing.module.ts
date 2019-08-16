import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleDetailsComponent } from './module-details/module-details.component';
import { DocumodeComponent } from './documode/documode.component';
import { PresmodeComponent } from './presmode/presmode.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', loadChildren: './main/main.module#MainModule' },
  { path: 'about', component: AboutComponent}
  { path: 'imbue', component: ModuleListComponent},
  { path: 'imbue/:materialId', component: ModuleDetailsComponent},
  { path: 'documentation_mode', component: DocumodeComponent},
  { path: 'presentation_mode', component: PresmodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
