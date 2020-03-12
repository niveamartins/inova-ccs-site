import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LabsService } from '../labs.service';
import { PopUpService } from '../pop-up.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  labs: any[];
  markers = [];

  constructor(private labsService: LabsService, private popupService: PopUpService) { }


  ngOnInit() {


    // puxamos aqui os dados dos labs e gravamos em labs
    this.labsService.getLabs().subscribe(
      (res) => {
        console.log(res);
        this.labs = res;
        console.log(this.labs[0].Nome);

        // essa parte, em teoria, deveria percorrer o array de json labs
        // e passar os campos de coordenadas para o array markers OK
        res.forEach(
         function(data: any, index: number) {
           const arr = [data.Coordenada_S, data.Coordenada_W];
           this.markers.push(arr);
          }, this
         );
        // essa parte do código percorre o array markers e plota eles OK
        this.markers.forEach( function(data, index) {
          const marker = L.marker([data[0], data[1]], {
            icon: L.icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: '/assets/imgs/marker.png'
            })
          }
            ) // .addTo(myMap);
          marker.bindPopup(this.popupService.makePopUps(res, index));
          marker.addTo(myMap);
        }, this);
      }
    );


    // indicando o centro e o zoom do mapa
    const myMap = L.map('map').setView([-22.8416639, -43.2341023], 16);



    // indicamos o plano de fundo do mapa e zoom máximo
    const configs = {
        layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  maxZoom: 30
                }).addTo(myMap),
                ]
            };

  }

}