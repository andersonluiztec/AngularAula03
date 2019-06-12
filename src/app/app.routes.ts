import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { Page404Component } from './modules/page404/page404.component';

const Rotas: Routes = [
 { path: '', component: LoginComponent },
 { path: 'login', redirectTo: '' },
 { path: 'inbox', component: InboxComponent},
 { path: 'cadastro', component: CadastroComponent},
 { path: '404', component: Page404Component},
 { path: '**', redirectTo: '/404'}
]

export const ModuloRotas = RouterModule.forRoot(Rotas);
