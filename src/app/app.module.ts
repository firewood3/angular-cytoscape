import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/workspace/nav/nav.component';
import { LinkoutComponent } from './components/workspace/cy/linkout/linkout.component';
import { LabelsComponent } from './components/workspace/cy/labels/labels.component';
import { NodeTypesComponent } from './components/workspace/cy/node-types/node-types.component';
import { EdgeTypesComponent } from './components/workspace/cy/edge-types/edge-types.component';
import { EdgeArrowTypesComponent } from './components/workspace/cy/edge-arrow-types/edge-arrow-types.component';
import { ColaComponent } from './components/workspace/cy/cola/cola.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LinkoutComponent,
    LabelsComponent,
    NodeTypesComponent,
    EdgeTypesComponent,
    EdgeArrowTypesComponent,
    ColaComponent,
    LoginComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
