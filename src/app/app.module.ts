import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LinkoutComponent } from './components/linkout/linkout.component';
import { LabelsComponent } from './components/labels/labels.component';
import {RouterModule} from '@angular/router';
import { NodeTypesComponent } from './components/node-types/node-types.component';
import { EdgeTypesComponent } from './components/edge-types/edge-types.component';
import { EdgeArrowTypesComponent } from './components/edge-arrow-types/edge-arrow-types.component';
import { ColaComponent } from './components/cola/cola.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LinkoutComponent,
    LabelsComponent,
    NodeTypesComponent,
    EdgeTypesComponent,
    EdgeArrowTypesComponent,
    ColaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/linkout', pathMatch: 'full'},
      {path: 'linkout', component: LinkoutComponent},
      {path: 'labels', component: LabelsComponent},
      {path: 'node-types', component: NodeTypesComponent},
      {path: 'edge-types', component: EdgeTypesComponent},
      {path: 'edge-arrow-types', component: EdgeArrowTypesComponent},
      {path: 'cola', component: ColaComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
