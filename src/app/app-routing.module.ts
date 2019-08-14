import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleDetailsComponent } from './module-details/module-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './main/main.module#MainModule' },
  { path: 'imbue', component: ModuleListComponent},
  { path: 'imbue/:materialId', component: ModuleDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
