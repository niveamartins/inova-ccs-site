import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  { path: 'main', component: HomeComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'quemsomos', component: QuemsomosComponent },
  { path: 'servicos', component: ServicosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
