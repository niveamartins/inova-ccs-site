import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { MapComponent } from './map/map.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuemsomosComponent,
    ServicosComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
