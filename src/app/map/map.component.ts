import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // map('nome da div'), setView([centro, zoom_inicial])

    const myMap = L.map('map').setView([-22.8416639, -43.2341023], 16);

    const configs = {
      layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 30
              }).addTo(myMap)]
    };
  }
}
