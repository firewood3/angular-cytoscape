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
import {WorkspaceGuardService} from './services/gard/workspace-guard.service';
import {LoginGuardService} from './services/gard/login-guard.service';
import {FreeComponent} from './components/workspace/cy/free/free.component';
import {TableComponent} from './components/workspace/table/table.component';

const routesRoot: Routes = [
  {path: '', redirectTo: '/workspace/free', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},
  {path: 'workspace', component: WorkspaceComponent, canActivate: [WorkspaceGuardService],
    children: [
      {path: '', redirectTo:'/workspace/free', pathMatch: 'full' },
      {path: 'free', component: FreeComponent},
      {path: 'linkout', component: LinkoutComponent},
      {path: 'labels', component: LabelsComponent},
      {path: 'node-types', component: NodeTypesComponent},
      {path: 'edge-types', component: EdgeTypesComponent},
      {path: 'edge-arrow-types', component: EdgeArrowTypesComponent},
      {path: 'cola', component: ColaComponent},
      {path: 'table', component: TableComponent}
    ]
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routesRoot)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
