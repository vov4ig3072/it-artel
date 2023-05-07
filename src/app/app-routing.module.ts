import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { AngularComponent } from './components/angular/angular.component';
import { NodejsComponent } from './components/nodejs/nodejs.component';

const routes: Routes = [
  { path: 'general', component: GeneralComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'node', component: NodejsComponent },
  { path: '**', redirectTo: 'general' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
