import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { ModuloRotas } from './app.routes';
import { Page404Component } from './modules/page404/page404.component';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { cmailFormFieldDirective } from './components/cmail-form-group/directives/cmailFormField.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    InboxComponent,
    Page404Component,
    CmailFormGroupComponent,
    cmailFormFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModuloRotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
