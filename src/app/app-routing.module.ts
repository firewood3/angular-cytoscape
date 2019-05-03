import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ColaComponent} from './components/workspace/cy/cola/cola.component';
import {EdgeArrowTypesComponent} from './components/workspace/cy/edge-arrow-types/edge-arrow-types.component';
import {EdgeTypesComponent} from './components/workspace/cy/edge-types/edge-types.component';
import {NodeTypesComponent} from './components/workspace/cy/node-types/node-types.component';
import {LabelsComponent} from './components/workspace/cy/labels/labels.component';
import {LinkoutComponent} from './components/workspace/cy/linkout/linkout.component';
import {WorkspaceComponent} from './components/workspace/workspace.component';
import {LoginComponent} from './components/login/login.component';

const routesRoot: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'workspace', component: WorkspaceComponent,
    children: [
      {path: '', redirectTo:'/workspace/linkout', pathMatch: 'full' },
      {path: 'linkout', component: LinkoutComponent},
      {path: 'labels', component: LabelsComponent},
      {path: 'node-types', component: NodeTypesComponent},
      {path: 'edge-types', component: EdgeTypesComponent},
      {path: 'edge-arrow-types', component: EdgeArrowTypesComponent},
      {path: 'cola', component: ColaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesRoot)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
