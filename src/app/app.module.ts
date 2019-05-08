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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/api/auth.service';
import {WorkspaceGuardService} from './services/gard/workspace-guard.service';
import {StoreModule} from '@ngrx/store';
import {authStateReducers} from './ngrx/reducers/auth.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './ngrx/effects/auth.effects';
import {LoginGuardService} from './services/gard/login-guard.service';
import {ErrorInterceptor, TokenInterceptor} from './services/interceptor/token-interceptor.service';
import { FreeComponent } from './components/workspace/cy/free/free.component';
import {eleStateReducers} from './ngrx/reducers/ele.reducers';
import {EleEffects} from './ngrx/effects/ele.effects';
import { TableComponent } from './components/workspace/table/table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

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
    WorkspaceComponent,
    FreeComponent,
    TableComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects, EleEffects]),
    StoreModule.forRoot(authStateReducers, {}),
    StoreModule.forRoot(eleStateReducers, {})
  ],
  providers: [
    AuthService, WorkspaceGuardService, LoginGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
